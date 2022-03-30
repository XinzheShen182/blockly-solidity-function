//函数的修饰词

//函数可见性
Blockly.Blocks['function_visibility'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["public","public"], ["private","private"], ["internal","internal"], ["external","external"]]), "function_visib");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//函数类型
Blockly.Blocks['function_type'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["pure","pure"], ["view","view"], ["payable","payable"]]), "function_ty");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
