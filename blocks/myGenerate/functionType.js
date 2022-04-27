//函数的类型
let function_type_block_color = 230;
//普通函数
Blockly.Blocks['function'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Function");
        this.appendValueInput("function_name")
            .setCheck(null)
            .appendField("Name");//函数名称
        this.appendStatementInput("function_params")
            .setCheck(null)
            .appendField("Parameters");//函数参数
        this.appendStatementInput("function_visibility")
            .setCheck(null)
            .appendField("Modifiers");//函数修饰符
        this.appendStatementInput("function_return")
            .setCheck(null)
            .appendField("Return Value Type");//函数返回值类型
        this.appendStatementInput("fields")
            .setCheck(null)
            .appendField("Related Fields");//关联的属性
        this.appendStatementInput("code")
            .setCheck(null)
            .appendField("code");//代码块
        this.setColour(function_type_block_color);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//构造函数
Blockly.Blocks['construct'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Constructor");
        this.appendStatementInput("constructor_visibility")
            .setCheck(null)
            .appendField("Visibility");//可见性
        this.appendStatementInput("constructor_params")
            .setCheck(null)
            .appendField("Parameters");//构造器参数
        this.appendStatementInput("constructor_field")
            .setCheck(null)
            .appendField("Related Fields");//关联的属性
        this.appendStatementInput("constructor_code")
            .setCheck(null)
            .appendField("code");//代码块
        this.setColour(function_type_block_color);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//事件
Blockly.Blocks['event'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Event");
        this.appendValueInput("event_name")
            .setCheck(null)
            .appendField("Name");//事件名称
        this.appendStatementInput("event_params")
            .setCheck(null)
            .appendField("Parameters");//事件参数
        this.setColour(function_type_block_color);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//回退函数
Blockly.Blocks['fall_back'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Fallback");
        this.appendStatementInput("visibility")
            .setCheck(null)
            .appendField("Modifiers");//函数修饰符
        this.appendStatementInput("constructor_field")
            .setCheck(null)
            .appendField("Related Fields");//关联的属性
        this.appendStatementInput("code")
            .setCheck(null)
            .appendField("Code");//代码块
        this.setColour(function_type_block_color);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
