let function_statement_block_color = 30;
Blockly.Blocks['ordinary'] = {
    init: function () {
        this.appendValueInput("statement")
            .setCheck(null)
            .appendField("Other Statements");//其他语句
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(function_statement_block_color);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['assignment'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Assignment");//赋值语句
        this.appendValueInput("left")
            .setCheck(null)
            .appendField("From");//左值
        this.appendValueInput("right")
            .setCheck(null)
            .appendField("To");//右值
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(function_statement_block_color);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
