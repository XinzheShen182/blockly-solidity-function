'use strict';

goog.require('Blockly.Solidity');

Blockly.Solidity['function_visibility'] = function (block) {
    var code = " " + block.getFieldValue('function_visib') + " ";
    return code;
}

Blockly.Solidity['function_type'] = function (block) {
    var code = " " + block.getFieldValue('function_ty') + " ";
    return code;
}

