'use strict';

goog.require('Blockly.Solidity');

Blockly.Solidity['ordinary'] = function (block) {
   var code = Blockly.Solidity.valueToCode(block,'statement', Blockly.Solidity.ORDER_ATOMIC) + ";";
   return code;
}

Blockly.Solidity['assignment'] = function (block) {
    var left = Blockly.Solidity.valueToCode(block,'left', Blockly.Solidity.ORDER_ATOMIC);
    var right = Blockly.Solidity.valueToCode(block,'right', Blockly.Solidity.ORDER_ATOMIC);
    var code = left + " = " + right + ";";
    return code;
}
