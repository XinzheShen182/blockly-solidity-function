//函数的类型

//普通函数
Blockly.Blocks['fucntion'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("function");
        this.appendValueInput("function_name")
            .setCheck(null)
            .appendField("函数名称");
        this.appendStatementInput("function_visibility")
            .setCheck(null)
            .appendField("函数修饰符");
        this.appendStatementInput("function_params")
            .setCheck(null)
            .appendField("函数参数");
        this.appendStatementInput("function_return")
            .setCheck(null)
            .appendField("函数返回值类型");
        this.appendStatementInput("fields")
            .setCheck(null)
            .appendField("关联的属性");
        this.appendStatementInput("code")
            .setCheck(null)
            .appendField("代码块");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//构造函数
Blockly.Blocks['construct'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("constructor");
        this.appendStatementInput("constructor_visiblity")
            .setCheck(null)
            .appendField("可见性");
        this.appendStatementInput("constructor_params")
            .setCheck(null)
            .appendField("构造器参数");
        this.appendStatementInput("constructor_field")
            .setCheck(null)
            .appendField("关联的属性");
        this.appendStatementInput("constructor_code")
            .setCheck(null)
            .appendField("代码块");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//事件
Blockly.Blocks['event'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("event");
        this.appendValueInput("event_name")
            .setCheck(null)
            .appendField("事件名称");
        this.appendStatementInput("event_params")
            .setCheck(null)
            .appendField("事件参数");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//回退函数
Blockly.Blocks['fall_back'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("fallback");
        this.appendStatementInput("visibility")
            .setCheck(null)
            .appendField("函数修饰符");
        this.appendStatementInput("code")
            .setCheck(null)
            .appendField("代码块");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
