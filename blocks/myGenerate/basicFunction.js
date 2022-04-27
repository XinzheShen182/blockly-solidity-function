//基本的复用功能块

let basic_function_block_color = 165;
//把合约的拥有者设置为(以太坊账户地址)
Blockly.Blocks['set_contract_owner'] = {
    init: function () {
        this.appendValueInput("contract_owner")
            .setCheck(null)
            .appendField("Set Contract Owner");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(basic_function_block_color);
        this.setTooltip("把合约的拥有者设置为(以太坊账户地址):");
        this.setHelpUrl("");
    }
};

//销毁合约，并将合约内以太坊转移至账户
Blockly.Blocks['destroy_contract'] = {
    init: function () {
        this.appendValueInput("destroy")
            .setCheck(null)
            .appendField("Destroy contract And Transfer ETH To:");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(basic_function_block_color);
        this.setTooltip("销毁合约，并将合约内以太坊转移至账户：");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['get_value'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Get the value of a key");//获取某个键对应的值
        this.appendValueInput("variable")
            .setCheck(null)
            .appendField("The name of the variable being queried");//查询的变量的名称：
        this.appendValueInput("key")
            .setCheck(null)
            .appendField("The key to query");//要查询的键：
        this.appendValueInput("return_value")
            .setCheck(null)
            .appendField("Assign the query result to the Variable：");//查询到的结果赋值给变量
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(basic_function_block_color);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['transfer'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Transfer ETH");//转移以太币功能
        this.appendValueInput("to_address")
            .setCheck(null)
            .appendField("Recipient Account Address");//收款账户地址
        this.appendValueInput("money")
            .setCheck(null)
            .appendField("Transfer Amount");//转账金额(wei)：
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(basic_function_block_color);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['require'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Require");//require语句
        this.appendValueInput("logic_expression")
            .setCheck(null)
            .appendField("Logic Expression");//逻辑表达式
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(basic_function_block_color);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
