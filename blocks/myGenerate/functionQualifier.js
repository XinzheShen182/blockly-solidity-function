//函数的修饰词
let function_qualifier_block_color=0;
//函数可见性
Blockly.Blocks['function_visibility'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["public","public"], ["private","private"], ["internal","internal"], ["external","external"]]), "function_visib");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(function_qualifier_block_color);
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
        this.setColour(function_qualifier_block_color);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
