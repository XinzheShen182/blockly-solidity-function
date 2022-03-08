// /**实体*/
// Blockly.Blocks['entity'] = {
//   init: function () {
//     this.appendDummyInput()
//       .appendField(new Blockly.FieldDropdown([["map", "MAP_TYPE"], ["数字", "NUM_TYPE"], ["字符", "CHAR_TYPE"], ["布尔", "BOOL_TYPE"], ["地址", "ADDR_TYPE"]]), "NAME");
//     this.appendValueInput("FIELD_NAME")
//       .setCheck(null);
//     this.appendStatementInput("MAP")
//       .setCheck(null);
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(230);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };

// Blockly.Blocks['map'] = {
//   init: function () {
//     this.appendDummyInput()
//       .appendField(new Blockly.FieldDropdown([["数字", "NUM_TYPE"], ["字符", "CHAR_TYPE"], ["地址", "ADDR_TYPE"], ["布尔", "BOOL_TYPE"]]), "TYPE");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(45);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };

/**仅仅含有名字的的实体块 */
// Blockly.Blocks['entity_only_name'] = {
//   init: function () {
//     this.appendValueInput("ENTITY_NAME")
//       .setCheck("String")
//       .appendField("实体名字");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(230);
//     this.setTooltip("不带get set方法的实体");
//     this.setHelpUrl("");
//   }
// };


/**合约*/
Blockly.Blocks['contract'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("合约");
        this.appendValueInput("CONTRACT_NAME")
            .setCheck(null)
            .appendField("合约名字");
        this.appendValueInput("CONTRACT_DESC")
            .setCheck(null)
            .appendField("合约描述");
        this.appendStatementInput("IF_USE_INHERIT")
            .setCheck(null)
            .appendField("是否使用继承的库合约");
        this.appendStatementInput("CONTRACT_TERM")
            .setCheck(null)
            .appendField("关联的条款流程ID");
        this.setColour(90);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//条款
Blockly.Blocks['term'] = {
    init: function () {
        this.appendValueInput("RETATED_FLOW_ID")
            .setCheck(null)
            .appendField("关联的条款流程ID");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
//使用继承
Blockly.Blocks['unuse_inherit'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("否");
        this.setPreviousStatement(true, null);
        this.setColour(45);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['use_inherit'] = {
    init: function () {
        this.appendStatementInput("USE")
            .setCheck(null)
            .appendField("是");
        this.setPreviousStatement(true, null);
        this.setColour(20);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
Blockly.Blocks['library'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["ERC1155", "ERC1155"],
                ["Ownable", "Ownable"],
                ["IERC165", "IERC165"],
                ["ERC1155Holder", "ERC1155Holder"],
                ["Address", "Address"],
                ["IERC1155", "IERC1155"]]), "SMART_CONTRACT_LIBRARY");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
/**方法*/
// Blockly.Blocks['work_contract_method'] = {
//   init: function () {
//     this.appendDummyInput()
//       .appendField("作品合约");
//     this.appendDummyInput()
//       .appendField("方法类型")
//       .appendField(new Blockly.FieldDropdown([
//       ["判断作品是否存在","JUDGE_WORK_EXIST"],//
//       ["获取作品的工程Id","GET_PROJECT_ID"],//
//       ["设置作品的工程Id","SET_PROJECT_ID"],//
//       ["获取工程合约地址","GET_PROJECT_ADDRESS"],//
//       ["增加作品的工程数目","ADD_PROJECT_NUM"],//
//       ["获得作品的原作者","GET_ORIGIN_AUTHOR"],//
//       ["获取作品的某任拥有者","GET_OWNER_BY_INDEX"],//
//       ["设置作品的某任拥有者","SET_OWNER_BY_INDEX"],//
//       ["增加作品拥有者数目","ADD_OWNER_NUM"],//
//       ["设置源作品Id","SET_FROM_WORK"],//
//       ["获得源作品Id","GET_FROM_WORK"],//
//       ["设置源作品合约地址","SET_FROM_CONTRACT"],
//       ["获得源作品合约地址","GET_FROM_CONTRACT"],
//       ["添加源作品数目","ADD_FROMM_WORK_NUM"],
//       ["设置源模板ID","GET_FROM_IP_ID"],
//       ["获得源模板ID","SET_FROM_IP_ID"],
//       ["设置源模板合约地址","SET_FROM_IP_CONTRACT"],
//       ["获得源模板合约地址","GET_FROM_IP_CONTRACT"],
//       ["增加源模板的数目","ADD_FROM_IP_NUM"],
//       ["获取当前作品数目","GET_ALL_WORK_NUM"],
//       ["创建新作品Id","CREATE_NEW_WORK_ID"],//
//       ["涉及工程的发布作品", "PUBLISH_WORK_WITH_PROJECT"],//
//       ["提案申请", "PROPOSAL_APPLY_FOR"],//
//       ["不涉及工程的发布作品", "PUBLISH_WORK_WITHOUT_PROJECT"],//
//       ["添加作品状态信息", "STATE_INFO"]]), "METHOD_TYPE");//
//     this.appendStatementInput("RELATED_ENTITY")
//       .setCheck(null)
//       .appendField("关联的实体");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(270);
//     this.setTooltip("方法");
//     this.setHelpUrl("");
//   }
// };

// Blockly.Blocks['get_method'] = {
//   init: function () {
//     this.appendDummyInput()
//       .appendField("get方法");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(80);
//     this.setTooltip("get方法");
//     this.setHelpUrl("");
//   }
// };

// Blockly.Blocks['set_method'] = {
//   init: function () {
//     this.appendDummyInput()
//       .appendField("set方法");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(80);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };