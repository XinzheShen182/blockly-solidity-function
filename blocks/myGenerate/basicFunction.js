//基本的复用功能块

//把合约的拥有者设置为(以太坊账户地址)
Blockly.Blocks['set_contract_owner'] = {
    init: function() {
        this.appendValueInput("contract_owner")
            .setCheck(null)
            .appendField("把合约的拥有者设置为(以太坊账户地址):");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(165);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//销毁合约，并将合约内以太坊转移至账户
Blockly.Blocks['destroy_contract'] = {
    init: function() {
        this.appendValueInput("destroy")
            .setCheck(null)
            .appendField("销毁合约，并将合约内以太坊转移至账户：");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(165);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['get_value'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("获取某个键对应的值");
        this.appendValueInput("variable")
            .setCheck(null)
            .appendField("查询的变量的名称：");
        this.appendValueInput("key")
            .setCheck(null)
            .appendField("要查询的键：");
        this.appendValueInput("return_value")
            .setCheck(null)
            .appendField("查询到的内容赋值给变量：");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(165);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['transfer'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("转移以太币功能");
        this.appendValueInput("to_address")
            .setCheck(null)
            .appendField("收款账户地址:");
        this.appendValueInput("money")
            .setCheck(null)
            .appendField("转账金额(wei)：");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(165);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['require'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("require语句");
        this.appendValueInput("logic_expression")
            .setCheck(null)
            .appendField("逻辑表达式");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(165);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
