'use strict';

goog.require('Blockly.Solidity');

Blockly.Solidity['basic_type'] = function (block) {
    var field_name = Blockly.Solidity.valueToCode(block, 'basic_field', Blockly.Solidity.ORDER_ATOMIC);
    var type_name = block.getFieldValue('basic_fields');
    var code = type_name + " " + field_name;
    return code;
}

//只含属性类型
Blockly.Solidity['basic_type_no_name'] = function (block) {
    var type_name = block.getFieldValue('basic_fields_no_name');
    return type_name;
}
//嵌套的struct
Blockly.Solidity['nest_struct'] = function (block) {
    var struct_name = Blockly.Solidity.valueToCode(block, 'struct_name', Blockly.Solidity.ORDER_ATOMIC);
    var code = struct_name;
    return code;
}

//嵌套的mapping和array
Blockly.Solidity['nest_mapping_array'] = function (block) {
    var type = block.getFieldValue('nest_type');
    var code;
    if(type === "mapping"){
         console.log("aaabbb"||"bbb")
         var allMap = block.getInputTargetBlock('nest');
         var all_map = getAllStatementBlocks(allMap);
         console.log(all_map);
         all_map = changeArray(all_map)
         console.log(all_map)
         code = getAllMap(all_map);
    }
    else{
        var allArray = block.getInputTargetBlock('nest');
        var all_array = getAllStatementBlocks(allArray);
        code = all_array+"[]";
    }
    return code;
}

Blockly.Solidity['special_type'] = function (block) {
    var name = Blockly.Solidity.valueToCode(block, 'NAME', Blockly.Solidity.ORDER_ATOMIC);
    var type = block.getFieldValue('special_fields');
    var allFields = block.getInputTargetBlock('special_field');
    var fields = getAllStatementBlocks(allFields);
    fields = changeArray(fields);
    var code;
    if(type === "struct"){
        var res="";
        for(var i=0;i<fields.length;i++){
            res = fields[i]+";\n";
        }
        code = "struct "+ name + "{\n" + res + "}";
    }else if(type === "mapping"){
        var res = getAllMap(fields);
        code = res + " " + name;
    }else{
        code = fields+"[] "+ name;
    }
    return code;
}

/**文本块的代码生成 */
Blockly.Solidity['text'] = function (block) {
    var textValue = block.getFieldValue('TEXT');
    return [textValue, Blockly.Solidity.ORDER_ATOMIC];
};

/**获取所有statement的block的代码 */
function getAllStatementBlocks(define_blocks) {
    var blocksCodes = [];
    if (define_blocks)
        do {
            var tmp = Blockly.Solidity.blockToCode(define_blocks);
            blocksCodes.push(tmp);
        } while (define_blocks = define_blocks.getNextBlock());
    return blocksCodes;
}

//获取map
function getAllMap(array) {
    var n = array.length;
    var res = "";
    res = "mapping(" + array[n - 2] + "=>" + array[n - 1] + ")";
    console.log(res);
    n = n - 3;
    while (n >= 0) {
        res = "mapping(" + array[n]+ "=>" + res + ")";
        n--;
    }
    console.log(res);
    return res;
}

//statement数组转换
function changeArray(array){
    var res = [];
    res.push(array[array.length-1]);
    for(var i=array.length-2;i>=0;i--){
        var next = array[i+1];
        var len = next.length;
        var curLen = array[i].length;
        var tmp = array[i].slice(0,curLen-len);
        res.push(tmp);
    }
    return res.reverse()
}

