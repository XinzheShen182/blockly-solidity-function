'use strict';

goog.require('Blockly.Solidity');

//函数生成
Blockly.Solidity['function'] = function (block) {
    var code;
    var functionName = Blockly.Solidity.valueToCode(block, 'function_name', Blockly.Solidity.ORDER_ATOMIC);
    code = "functon " + functionName + "("
    //加入函数参数
    var allParamBlocks = block.getInputTargetBlock('function_params');
    var allParams = getAllStatementBlocks(allParamBlocks);
    allParams = changeArray(allParams);
    if (allParams[0] === undefined) {
        code = code + ")"
    } else if (allParams.length === 1) {
        code = code + allParams[0] + ")"
    } else {
        code = code + allParams[0];
        for (var i = 1; i < allParams.length; i++) {
            code = code + "," + allParams[i];
        }
        code = code + ")"
    }
    //函数修饰符
    var allQuaBlocks = block.getInputTargetBlock('function_visibility');
    var allQua = getAllStatementBlocks(allQuaBlocks);
    allQua = changeArray(allQua);
    if (allQua[0] === undefined) {
    } else {
        for (var j = 0; j < allQua.length; j++) {
            code = code + allQua[j];
        }
    }
    //函数返回值
    var returnsBlocks = block.getInputTargetBlock('function_return');
    var returns = getAllStatementBlocks(returnsBlocks);
    returns = changeArray(returns);
    if (returns[0] === undefined) {
    } else if (returns.length === 1) {
        code = code + " returns(" + returns[0] + ")";
    } else {
        code = code + " returns(" + returns[0];
        for (var i = 1; i < returns.length; i++) {
            code = code + "," + returns[i]
        }
        code = code + ")"
    }
    //关联的属性
    var allFieLdBlock = block.getInputTargetBlock('fields');
    var allField = getAllStatementBlocks(allFieLdBlock);
    allField = changeArray(allField);
    if (allField[0] === undefined) {
    } else {
        for (var i = 0; i < allField.length; i++) {
            if (allField[i].slice(0, 7) === "struct ") {
                code = allField[i] + "\n" + code;
            } else {
                code = allField[i] + ";\n" + code;
            }
        }
    }
    //函数语句
    var allCodeBlocks = block.getInputTargetBlock('code')
    // var allCode = getAllStatementBlocks(allCodeBlocks);
    var allCode = Blockly.Solidity.statementToCode(block, 'code');
    console.log('allCode', allCode);
    // allCode = changeArray(allCode);
    code = code + "\n{\n";
    //生成函数变量定义
    code += generateVariables(block);
    if (allCode === undefined) {
        code += "}";
    } else {
        code += allCode + "}";
    }
    // else {
    //     for (var i = 0; i < allCode.length; i++) {
    //         code = code + allCode[i] + "\n";
    //     }
    //     code = code + "}";
    // }

    return code
}

//生成函数变量定义
function generateVariables(block) {
    //最先声明函数变量
    var globals = [];
    var workspace = block.workspace;
    var variables = Blockly.Variables.allUsedVarModels(workspace) || [];
    // console.log('variables:', variables);
    for (var i = 0, variable; variable = variables[i]; i++) {
        var varName = variable.name;
        if (block.getVars().indexOf(varName) == -1) {
            globals.push(Blockly.Solidity.nameDB_.getName(varName,
                Blockly.VARIABLE_CATEGORY_NAME));
        }
    }
    globals = globals.length ? Blockly.Solidity.INDENT + "uint256 " + globals.join(", ") + ";\n" : '';
    return globals
    //-----------end---------------------------//
}

//构造函数生成
Blockly.Solidity['construct'] = function (block) {
    var code;
    code = "constructor(";
    //参数
    var allParamsBlcoks = block.getInputTargetBlock('constructor_params');
    var allParams = getAllStatementBlocks(allParamsBlcoks);
    allParams = changeArray(allParams);
    if (allParams[0] === undefined) {
        code = code + ")"
    } else if (allParams.length === 1) {
        code = code + allParams[0] + ")"
    } else {
        code = code + allParams[0];
        for (var i = 1; i < allParams.length; i++) {
            code = code + "," + allParams[i];
        }
        code = code + ")";
    }
    //可见性
    var allVisiBlocks = block.getInputTargetBlock('constructor_visiblity');
    var allVisi = getAllStatementBlocks(allVisiBlocks);
    allVisi = changeArray(allVisi);
    if (allVisi[0] === undefined) {
    } else {
        for (var i = 0; i < allVisi.length; i++) {
            code = code + allVisi[i];
        }
    }
    //关联的属性
    var allFieddBlock = block.getInputTargetBlock('constructor_field');
    var allField = getAllStatementBlocks(allFieddBlock);
    allField = changeArray(allField);
    if (allField[0] === undefined) {
    } else {
        for (var i = 0; i < allField.length; i++) {
            if (allField[i].slice(0, 7) === "struct ") {
                code = allField[i] + "\n" + code;
            } else {
                code = allField[i] + ";\n" + code;
            }
        }
    }
    //代码块
    code = code + "\n{\n"
    var allCodeBlocks = block.getInputTargetBlock('constructor_code')
    var allCode = getAllStatementBlocks(allCodeBlocks);
    allCode = changeArray(allCode);
    if (allCode[0] === undefined) {
        code = code + "}"
    } else {
        for (var i = 0; i < allCode.length; i++) {
            code = code + allCode[i] + "\n";
        }
        code = code + "}";
    }
    return code;
}

//事件生成
Blockly.Solidity['event'] = function (block) {
    var code = "event";
    var name = Blockly.Solidity.valueToCode(block, 'event_name', Blockly.Solidity.ORDER_ATOMIC);
    code = code + " " + name;
    //参数
    var allParamBlocks = block.getInputTargetBlock('event_params');
    var allParams = getAllStatementBlocks(allParamBlocks);
    allParams = changeArray(allParams);
    if (allParams[0] === undefined) {
        code = code + "();"
    } else {
        code = code + "(" + allParams[0];
        for (var i = 1; i < allParams.length; i++) {
            code = code + allParams[i];
        }
        code = code + ");";
    }
    return code;
}

//回退函数生成
Blockly.Solidity['fall_back'] = function (block) {
    var code = "fallback()"
    //可见性
    var allVisiBlocks = block.getInputTargetBlock('visibility');
    var allVisi = getAllStatementBlocks(allVisiBlocks);
    allVisi = changeArray(allVisi);
    if (allVisi[0] === undefined) {
    } else {
        for (var i = 0; i < allVisi.length; i++) {
            code = code + allVisi[i];
        }
    }
    code = code + "\n{\n";
    var allCodeBlocks = block.getInputTargetBlock('code')
    var allCode = getAllStatementBlocks(allCodeBlocks);
    allCode = changeArray(allCode);
    if (allCode[0] === undefined) {
        code = code + "}"
    } else {
        for (var i = 0; i < allCode.length; i++) {
            code = code + allCode[i] + "\n";
        }
        code = code + "}";
    }
    return code;
}
