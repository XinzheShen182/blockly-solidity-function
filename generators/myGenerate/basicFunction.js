'use strict';

goog.require('Blockly.Solidity');


Blockly.Solidity['set_contract_owner'] = function (block) {
    var owner = Blockly.Solidity.valueToCode(block, 'contract_owner', Blockly.Solidity.ORDER_ATOMIC);
    var code = "owner = "+owner + ";";
    return code;
}

Blockly.Solidity['destroy_contract'] = function (block) {
    var address = Blockly.Solidity.valueToCode(block, 'destroy', Blockly.Solidity.ORDER_ATOMIC);
    var code = "require(msg.sender == owner);\n"+"selfdestruct("+address+");";
    return code;
}

Blockly.Solidity['get_value'] = function (block) {
    var variable = Blockly.Solidity.valueToCode(block, 'variable', Blockly.Solidity.ORDER_ATOMIC);
    var key = Blockly.Solidity.valueToCode(block, 'key', Blockly.Solidity.ORDER_ATOMIC);
    var return_value = Blockly.Solidity.valueToCode(block, 'return_value', Blockly.Solidity.ORDER_ATOMIC);
    var code = return_value+" = "+variable+"["+key+"];";
    return code;
}

Blockly.Solidity['transfer'] = function (block) {
    var to_address = Blockly.Solidity.valueToCode(block, 'to_address', Blockly.Solidity.ORDER_ATOMIC);
    var money = Blockly.Solidity.valueToCode(block, 'money', Blockly.Solidity.ORDER_ATOMIC);
    var code = to_address+".transfer("+money+");";
    return code;
}

Blockly.Solidity['require'] = function (block) {
    var conditionCode = Blockly.Solidity.valueToCode(block, 'logic_expression' , Blockly.Solidity.ORDER_NONE);
    var code = "require("+conditionCode+");";
    return code;
}

/**文本块的代码生成 */
Blockly.Solidity['text'] = function (block) {
    var textValue = block.getFieldValue('TEXT');
    return [textValue, Blockly.Solidity.ORDER_ATOMIC];
};

