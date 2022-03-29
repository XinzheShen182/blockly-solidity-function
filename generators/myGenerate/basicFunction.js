'use strict';

goog.require('Blockly.Solidity');

/**文本块的代码生成 */
Blockly.Solidity['text'] = function (block) {
    var textValue = block.getFieldValue('TEXT');
    return [textValue, Blockly.Solidity.ORDER_ATOMIC];
};

