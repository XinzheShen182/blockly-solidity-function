Blockly.Blocks['ordinary'] = {
    init: function() {
        this.appendValueInput("statement")
            .setCheck(null)
            .appendField("其他语句");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['assignment'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("赋值语句");
        this.appendValueInput("left")
            .setCheck(null)
            .appendField("左值");
        this.appendValueInput("right")
            .setCheck(null)
            .appendField("右值");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
