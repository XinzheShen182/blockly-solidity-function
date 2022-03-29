//属性类型

//带名字的属性
Blockly.Blocks['baisc_type'] = {
    init: function() {
        this.appendValueInput("baisc_field")
            .setCheck(null)
            .appendField(new Blockly.FieldDropdown([["uint256","uint256"], ["address","address"], ["bool","bool"], ["string","string"]]), "basic_fields");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(345);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//引用类型
Blockly.Blocks['special_type'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("变量名字：");
        this.appendStatementInput("special_field")
            .setCheck(null)
            .appendField(new Blockly.FieldDropdown([["mapping","maping"], ["struct","struct"], ["array","array"]]), "special_fields");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(345);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//只有属性类型
Blockly.Blocks['baisc_type_no_name'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["uint256","uint256"], ["address","address"], ["bool","bool"], ["string","string"]]), "basic_fields_no_name");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(345);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//结构体嵌套在mapping或者array里
Blockly.Blocks['nest_struct'] = {
    init: function() {
        this.appendValueInput("struct_name")
            .setCheck(null)
            .appendField("struct");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(345);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//嵌套的mapping和array
Blockly.Blocks['nest_mapping_array'] = {
    init: function() {
        this.appendStatementInput("nest")
            .setCheck(null)
            .appendField(new Blockly.FieldDropdown([["mapping","mapping"], ["array","array"]]), "nest_type");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(345);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
