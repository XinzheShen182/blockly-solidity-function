/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating Solidity for logic blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.codeGenerator.logic');

goog.require('Blockly.codeGenerator');


Blockly.codeGenerator['controls_if'] = function (block) {
    // If/elseif/else condition.
    var n = 0;
    var code = '', branchCode, conditionCode;
    do {
        conditionCode = Blockly.codeGenerator.valueToCode(block, 'IF' + n,
            Blockly.codeGenerator.ORDER_NONE) || 'false';
        branchCode = Blockly.codeGenerator.statementToCode(block, 'DO' + n);
        code += (n > 0 ? ' else ' : '') +
            'if (' + conditionCode + ') {\n' + branchCode + '}';

        ++n;
    } while (block.getInput('IF' + n));

    if (block.getInput('ELSE')) {
        branchCode = Blockly.codeGenerator.statementToCode(block, 'ELSE');
        code += ' else {\n' + branchCode + '}';
    }
    console.log('controls_if' + code);
    return code + '\n';
};

Blockly.codeGenerator['controls_ifelse'] = Blockly.codeGenerator['controls_if'];

Blockly.codeGenerator['logic_compare'] = function (block) {
    // Comparison operator.
    var OPERATORS = {
        'EQ': '==',
        'NEQ': '!=',
        'LT': '<',
        'LTE': '<=',
        'GT': '>',
        'GTE': '>='
    };
    var operator = OPERATORS[block.getFieldValue('OP')];
    var order = (operator == '==' || operator == '!=') ?
        Blockly.codeGenerator.ORDER_EQUALITY : Blockly.codeGenerator.ORDER_RELATIONAL;
    var argument0 = Blockly.codeGenerator.valueToCode(block, 'A', order) || '0';
    var argument1 = Blockly.codeGenerator.valueToCode(block, 'B', order) || '0';
    var code = argument0 + ' ' + operator + ' ' + argument1;
    console.log('logic_compare' + code);
    return [code, order];
};

Blockly.codeGenerator['logic_operation'] = function (block) {
    // Operations 'and', 'or'.
    var operator = (block.getFieldValue('OP') == 'AND') ? '&&' : '||';
    var order = (operator == '&&') ? Blockly.codeGenerator.ORDER_LOGICAL_AND :
        Blockly.codeGenerator.ORDER_LOGICAL_OR;
    var argument0 = Blockly.codeGenerator.valueToCode(block, 'A', order);
    var argument1 = Blockly.codeGenerator.valueToCode(block, 'B', order);
    if (!argument0 && !argument1) {
        // If there are no arguments, then the return value is false.
        argument0 = 'false';
        argument1 = 'false';
    } else {
        // Single missing arguments have no effect on the return value.
        var defaultArgument = (operator == '&&') ? 'true' : 'false';
        if (!argument0) {
            argument0 = defaultArgument;
        }
        if (!argument1) {
            argument1 = defaultArgument;
        }
    }
    var code = argument0 + ' ' + operator + ' ' + argument1;
    return [code, order];
};

Blockly.codeGenerator['logic_negate'] = function (block) {
    // Negation.
    var order = Blockly.codeGenerator.ORDER_LOGICAL_NOT;
    var argument0 = Blockly.codeGenerator.valueToCode(block, 'BOOL', order) ||
        'true';
    var code = '!' + argument0;
    return [code, order];
};

Blockly.codeGenerator['logic_boolean'] = function (block) {
    // Boolean values true and false.
    var code = (block.getFieldValue('BOOL') == 'TRUE') ? 'true' : 'false';
    return [code, Blockly.codeGenerator.ORDER_ATOMIC];
};

Blockly.codeGenerator['logic_null'] = function (block) {
    // Null data type.
    return ['null', Blockly.codeGenerator.ORDER_ATOMIC];
};

Blockly.codeGenerator['logic_ternary'] = function (block) {
    // Ternary operator.
    var value_if = Blockly.codeGenerator.valueToCode(block, 'IF',
        Blockly.codeGenerator.ORDER_CONDITIONAL) || 'false';
    var value_then = Blockly.codeGenerator.valueToCode(block, 'THEN',
        Blockly.codeGenerator.ORDER_CONDITIONAL) || 'null';
    var value_else = Blockly.codeGenerator.valueToCode(block, 'ELSE',
        Blockly.codeGenerator.ORDER_CONDITIONAL) || 'null';
    var code = value_if + ' ? ' + value_then + ' : ' + value_else;
    return [code, Blockly.codeGenerator.ORDER_CONDITIONAL];
};
