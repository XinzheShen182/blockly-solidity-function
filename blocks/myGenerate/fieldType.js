//属性类型
let field_type_block_color = 270;
//带名字的属性
Blockly.Blocks['basic_type'] = {
    init: function () {
        // this.appendValueInput("basic_field")
        //     .setCheck(null)
        //     .appendField(new Blockly.FieldDropdown([["uint256", "uint256"], ["address", "address"], ["bool", "bool"], ["string", "string"]]), "basic_fields");
        this.appendValueInput("basic_field")
            .setCheck(null)
            .appendField("Name：");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["uint256", "uint256"], ["address", "address"], ["bool", "bool"], ["string", "string"]]), "basic_fields");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(field_type_block_color);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//引用类型
Blockly.Blocks['special_type'] = {
    init: function () {
        // this.appendDummyInput()
        //     .appendField(new Blockly.FieldDropdown([["mapping", "mapping"], ["struct", "struct"], ["array", "array"]]), "special_fields");
        // this.appendValueInput("NAME")
        //     .setCheck(null)
        //     .appendField("Name");
        // this.setPreviousStatement(true, null);
        // this.setNextStatement(true, null);
        // this.setColour(block_color);
        // this.setTooltip("");
        // this.setHelpUrl("");

        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("Name：");
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["mapping", "mapping"], ["struct", "struct"], ["array", "array"]]), "special_fields");
        this.appendStatementInput("special_field")
            .setCheck(null)
            .appendField();
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(field_type_block_color);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//只有属性类型
Blockly.Blocks['basic_type_no_name'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["uint256", "uint256"], ["address", "address"], ["bool", "bool"], ["string", "string"]]), "basic_fields_no_name");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(field_type_block_color);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//结构体嵌套在mapping或者array里
Blockly.Blocks['nest_struct'] = {
    init: function () {
        this.appendValueInput("struct_name")
            .setCheck(null)
            .appendField("struct");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(field_type_block_color);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//嵌套的mapping和array
Blockly.Blocks['nest_mapping_array'] = {
    init: function () {
        this.appendStatementInput("nest")
            .setCheck(null)
            .appendField(new Blockly.FieldDropdown([["mapping", "mapping"], ["array", "array"]]), "nest_type");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(field_type_block_color);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
