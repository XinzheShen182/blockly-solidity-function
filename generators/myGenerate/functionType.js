'use strict';

goog.require('Blockly.Solidity');

//函数生成
Blockly.Solidity['function'] = function (block) {
    var code;
    var functionName = Blockly.Solidity.valueToCode(block, 'function_name', Blockly.Solidity.ORDER_ATOMIC);
    code = "functon "+functionName+"("
    //加入函数参数
    var allParamBlocks = block.getInputTargetBlock('function_params');
    var allParams = getAllStatementBlocks(allParamBlocks);
    allParams = changeArray(allParams);
    if(allParams[0]===undefined){
        code = code +")"
    }
    else if(allParams.length===1){
        code = code + allParams[0]+")"
    }
    else{
        code = code + allParams[0];
        for(var i=1;i<allParams.length;i++){
            code = code+","+allParams[i];
        }
        code = code+")"
    }
    //函数修饰符
    var allQuaBlocks = block.getInputTargetBlock('function_visibility');
    var allQua = getAllStatementBlocks(allQuaBlocks);
    allQua = changeArray(allQua);
    if(allQua[0]===undefined){
    }
    else{
        for(var j=0;j<allQua.length;j++){
            code = code+allQua[j];
        }
    }
    //函数返回值
    var returnsBlocks = block.getInputTargetBlock('function_return');
    var returns = getAllStatementBlocks(returnsBlocks);
    returns = changeArray(returns);
    if(returns[0]===undefined){
    }
    else if(returns.length===1){
        code = code + " returns(" +returns[0] +")";
    }else{
        code = code + " returns(" + returns[0];
        for(var i=1;i<returns.length;i++){
            code = code +","+ returns[i]
        }
        code = code + ")"
    }
    //关联的属性
    var allFieLdBlock = block.getInputTargetBlock('fields');
    var allField = getAllStatementBlocks(allFieLdBlock);
    allField = changeArray(allField);
    if(allField[0]===undefined){
    }
    else{
        for(var i=0;i<allField.length;i++){
            if(allField[i].slice(0,7)==="struct "){
                code = allField[i] + "\n" + code;
            }
            else{
                code =allField[i]+";\n"+code;
            }
        }
    }
    //函数语句
    var allCodeBlocks = block.getInputTargetBlock('code')
    var allCode = getAllStatementBlocks(allCodeBlocks);
    allCode = changeArray(allCode);
    code = code + "\n{\n";
    if(allCode[0]===undefined){
        code = code + "}";
    }
    else{
        for(var i=0;i<allCode.length;i++){
            code = code + allCode[i] + ";\n";
        }
        code = code + "}";
    }
    return code
}
