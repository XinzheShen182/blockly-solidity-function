'use strict';

goog.provide('Blockly.codeGenerator');

//定义生成器
Blockly.codeGenerator = new Blockly.Generator('Solidity');

/**
 * Order of operation ENUMs.
 * https://developer.mozilla.org/en/Solidity/Reference/Operators/Operator_Precedence
 */
Blockly.codeGenerator.ORDER_ATOMIC = 0;           // 0 "" ...
Blockly.codeGenerator.ORDER_NEW = 1.1;            // new
Blockly.codeGenerator.ORDER_MEMBER = 1.2;         // . []
Blockly.codeGenerator.ORDER_FUNCTION_CALL = 2;    // ()
Blockly.codeGenerator.ORDER_INCREMENT = 3;        // ++
Blockly.codeGenerator.ORDER_DECREMENT = 3;        // --
Blockly.codeGenerator.ORDER_BITWISE_NOT = 4.1;    // ~
Blockly.codeGenerator.ORDER_UNARY_PLUS = 4.2;     // +
Blockly.codeGenerator.ORDER_UNARY_NEGATION = 4.3; // -
Blockly.codeGenerator.ORDER_LOGICAL_NOT = 4.4;    // !
Blockly.codeGenerator.ORDER_TYPEOF = 4.5;         // typeof
Blockly.codeGenerator.ORDER_VOID = 4.6;           // void
Blockly.codeGenerator.ORDER_DELETE = 4.7;         // delete
Blockly.codeGenerator.ORDER_DIVISION = 5.1;       // /
Blockly.codeGenerator.ORDER_MULTIPLICATION = 5.2; // *
Blockly.codeGenerator.ORDER_MODULUS = 5.3;        // %
Blockly.codeGenerator.ORDER_SUBTRACTION = 6.1;    // -
Blockly.codeGenerator.ORDER_ADDITION = 6.2;       // +
Blockly.codeGenerator.ORDER_BITWISE_SHIFT = 7;    // << >> >>>
Blockly.codeGenerator.ORDER_RELATIONAL = 8;       // < <= > >=
Blockly.codeGenerator.ORDER_IN = 8;               // in
Blockly.codeGenerator.ORDER_INSTANCEOF = 8;       // instanceof
Blockly.codeGenerator.ORDER_EQUALITY = 9;         // == != === !==
Blockly.codeGenerator.ORDER_BITWISE_AND = 10;     // &
Blockly.codeGenerator.ORDER_BITWISE_XOR = 11;     // ^
Blockly.codeGenerator.ORDER_BITWISE_OR = 12;      // |
Blockly.codeGenerator.ORDER_LOGICAL_AND = 13;     // &&
Blockly.codeGenerator.ORDER_LOGICAL_OR = 14;      // ||
Blockly.codeGenerator.ORDER_CONDITIONAL = 15;     // ?:
Blockly.codeGenerator.ORDER_ASSIGNMENT = 16;      // = += -= *= /= %= <<= >>= ...
Blockly.codeGenerator.ORDER_COMMA = 17;           // ,
Blockly.codeGenerator.ORDER_NONE = 99;            // (...)


//区分实体类型的map
// const map=new Map(['价格','mapping(uint256 => uint256)'],['ipfsHash','mapping(uint256 => string)']);
const type_map = new Map([['NUM_TYPE', 'uint256'], ['CHAR_TYPE', 'string'], ['ADDR_TYPE', 'address'], ['BOOL_TYPE', 'bool']]);
const space_string = ' ';
var allEntity = new Array();
var contractName = space_string;

const separator = '￥';
/**------------------------合约---------------------------------------- */
Blockly.codeGenerator['contract'] = function (block) {
    var value_contract_name = Blockly.codeGenerator.valueToCode(block, 'CONTRACT_NAME', Blockly.codeGenerator.ORDER_ATOMIC);
    contractName = value_contract_name;
    var value_contract_desc = Blockly.codeGenerator.valueToCode(block, 'CONTRACT_DESC', Blockly.codeGenerator.ORDER_ATOMIC);
    console.log(value_contract_desc)
    var if_use = block.getInputTargetBlock('IF_USE_INHERIT');
    var method_top_block = block.getInputTargetBlock('CONTRACT_TERM');

    var use_library = getAllStatementBlocks(if_use).toString();
    var method_code = getAllStatementBlocks(method_top_block).toString();


    // TODO: Assemble JavaScript into code variable.
    var code = "CONTRACT" + separator + value_contract_name + separator + value_contract_desc + separator + method_code + separator + use_library;
    return code;
};
// 接口
Blockly.codeGenerator['interface'] = function (block) {
    var value_interface_name = Blockly.codeGenerator.valueToCode(block, 'INTERFACE_NAME', Blockly.codeGenerator.ORDER_ATOMIC);
    contractName = value_interface_name;
    var value_interface_desc = Blockly.codeGenerator.valueToCode(block, 'INTERFACE_DESC', Blockly.codeGenerator.ORDER_ATOMIC);
    console.log(value_interface_desc)
    var if_use = block.getInputTargetBlock('IF_USE_INHERIT');
    var method_top_block = block.getInputTargetBlock('CONTRACT_TERM');

    var use_library = getAllStatementBlocks(if_use).toString();
    var method_code = getAllStatementBlocks(method_top_block).toString();


    // TODO: Assemble JavaScript into code variable.
    var code = "INTERFACE" + separator +value_interface_name + separator + value_interface_desc + separator + method_code + separator + use_library;
    return code;
};

/**------------------------实体---------------------------------------- */
/**实体块的代码生成 */
Blockly.codeGenerator['entity'] = function (block) {
    var dropdown_name = block.getFieldValue('NAME');
    var entity_type_string = type_map.get(dropdown_name);
    var code;
    if (entity_type_string) {
        code = 'mapping(uint256 => ' + entity_type_string + ')';
    } else {
        var define_blocks = block.getInputTargetBlock('MAP');
        var allStatementBlocks = getAllStatementBlocks(define_blocks);
        code = getAllMap(allStatementBlocks);
        console.log('allMapCode:' + code);
    }
    var value_field_name = Blockly.codeGenerator.valueToCode(block, 'FIELD_NAME', Blockly.codeGenerator.ORDER_ATOMIC);
    //记录下定义的所有实体块的名字
    allEntity.push(value_field_name);
    code = code + space_string + value_field_name + ';';
    // var statements_name = Blockly.JavaScript.statementToCode(block, 'MAP');
    // TODO: Assemble JavaScript into code variable.
    return code;
};

Blockly.codeGenerator['unuse_inherit'] = function (block) {
    return "否";
}

Blockly.codeGenerator['use_inherit'] = function (block) {
    let libName = block.getInputTargetBlock('USE');
    let library_names = getAllStatementBlocks(libName).toString();
    return library_names;
}

Blockly.codeGenerator['library'] = function (block) {
    var smart_contract_library = block.getFieldValue('SMART_CONTRACT_LIBRARY');
    console.log("lib:" + smart_contract_library);
    return smart_contract_library;

}

Blockly.codeGenerator['map'] = function (block) {
    var dropdown_type = block.getFieldValue('TYPE');
    // TODO: Assemble JavaScript into code variable.
    return dropdown_type;
};


// /**仅仅含有实体名字的实体块 */
// Blockly.codelabGenerator['entity_only_name'] = function (block) {
//     var value_entity_name = Blockly.codelabGenerator.valueToCode(block, 'ENTITY_NAME', Blockly.codelabGenerator.ORDER_ATOMIC);
//     if (!allEntity.includes(value_entity_name)) {
//         alert('名字为：' + value_entity_name + '的实体之前未定义');
//     }
//     return value_entity_name;
// };


/**-------------------文本块------------------------------------------ */
/**文本块的代码生成 */
Blockly.codeGenerator['text'] = function (block) {
    var textValue = block.getFieldValue('TEXT');
    return [textValue, Blockly.codeGenerator.ORDER_ATOMIC];
};


/**----------------------方法------------------------------------------ */
Blockly.codeGenerator['work_contract_method'] = function (block) {
    var dropdown_method_type = block.getFieldValue('METHOD_TYPE');
    var define_blocks = block.getInputTargetBlock('RELATED_ENTITY');
    var codes = getAllStatementBlocks(define_blocks);
    //将关联的实体转换为参数
    var param_url = mergeParams(codes);
    var code;
    var url = 'localhost:8081/api/assemble?contractName=' + contractName + '&functionName=';
    switch (dropdown_method_type) {
        case 'CREATE_NEW_WORK_ID':
            url = url + 'getTokenID' + '&paramList=' + param_url;
            console.log('url:' + url)
            code = sendHttpGet(url);
            break;
        case 'PUBLISH_WORK_WITH_PROJECT':
            url = url + 'realse_with_project' + '&paramList=' + param_url;
            code = sendHttpGet(url);
            break;
        case 'PROPOSAL_APPLY_FOR':
            url = url + 'sendProposalRequest' + '&paramList=' + param_url;
            code = sendHttpGet(url);
            break;
        case 'PUBLISH_WORK_WITHOUT_PROJECT':
            url = url + 'realse_without_project' + '&paramList=' + param_url;
            code = sendHttpGet(url);
            break;
        case 'STATE_INFO':
            url = url + 'release_state' + '&paramList=' + param_url;
            code = sendHttpGet(url);
            break;
        case 'JUDGE_WORK_EXIST':
            url = url + 'judgeWorkIfExist' + '&paramList=' + param_url;
            code = sendHttpGet(url);
            break;
        case 'GET_PROJECT_ID':
            url = url + 'getProjectId' + '&paramList=' + param_url;
            code = sendHttpGet(url);
            break;
        case 'SET_PROJECT_ID':
            url = url + 'setProjectId' + '&paramList=' + param_url;
            code = sendHttpGet(url);
            break;
        case 'GET_PROJECT_ADDRESS':
            url = url + 'getProjectContract' + '&paramList=' + param_url;
            code = sendHttpGet(url);
            break;
        case 'ADD_PROJECT_NUM':
            url = url + 'addOneProjectNum' + '&paramList=' + param_url;
            code = sendHttpGet(url);
            break;
        case 'GET_ORIGIN_AUTHOR':
            url = url + 'getOriginalAuthor' + '&paramList=' + param_url;
            code = sendHttpGet(url);
            break;
        case 'GET_OWNER_BY_INDEX':
            url = url + 'getOwnerByWorkTokenIdAndIndex' + '&paramList=' + param_url;
            code = sendHttpGet(url);
            break;
        case 'SET_OWNER_BY_INDEX':
            url = url + 'setOwnerShipByWorkTokenId' + '&paramList=' + param_url;
            code = sendHttpGet(url);
            break;
        case 'ADD_OWNER_NUM':
            url = url + 'addOneOwnerNum' + '&paramList=' + param_url;
            code = sendHttpGet(url);
            break;
        case 'SET_FROM_WORK':
            url = url + 'setFromWork' + '&paramList=' + param_url;
            code = sendHttpGet(url);
            break;
        case 'GET_FROM_WORK':
            url = url + 'getFromWork' + '&paramList=' + param_url;
            code = sendHttpGet(url);
            break;
        case 'SET_FROM_CONTRACT':
            url = url + 'set_FromWorkContract' + '&paramList=' + param_url;
            code = sendHttpGet(url);
            break;
    }
    // TODO: Assemble JavaScript into code variable.
    console.log('codes:' + codes);
    allEntity = new Array();
    return code;
};


Blockly.codeGenerator['term'] = function (block) {
    var related_flow_id = Blockly.codeGenerator.valueToCode(block, 'RELATED_FLOW_ID', Blockly.codeGenerator.ORDER_ATOMIC);
    // var related_flow_id = block.getFieldValue('RETATED_FLOW_ID');
    console.log('related_flow_id:' + related_flow_id);
    return related_flow_id;
};

/**获取所有statement的block的代码 */
function getAllStatementBlocks(define_blocks) {
    var blocksCodes = [];
    if (define_blocks)
        do {
            var tmp = Blockly.codeGenerator.blockToCode(define_blocks);
            blocksCodes.push(tmp);
        } while (define_blocks = define_blocks.getNextBlock());
    return blocksCodes;
}

/**根据实体的类型，生成map */
function getAllMap(array) {
    var n = array.length;
    var res = "";
    res = "mapping(" + type_map.get(array[n - 2]) + "=>" + type_map.get(array[n - 1]) + ")";
    n = n - 3;
    while (n >= 0) {
        res = "mapping(" + type_map.get(array[n]) + "=>" + res + ")";
        n--;
    }
    return res;
}

function sendHttpGet(url) {
    var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
    httpRequest.open('GET', url, true);//第二步：打开连接  将请求参数写在url中  
    httpRequest.send();//第三步：发送请求  将请求参数写在URL中
    /**
     * 获取数据后的处理程序
     */
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {
            var json = httpRequest.responseText;//获取到json字符串，还需解析
            console.log('响应结果:' + json);
            window["generateCodeData"] = json;
            return json;
        }
    };
}

function generateCode(fileId, contractName) {
    let data;
    //获得basicFunction
    axios.get('http://localhost:9014/api/generate/code', {
        params: {
            fileIds: fileId,
            contractName: contractName
        }
    }).then(response => {
        if (response.data.code === 200) {
            let resData = response.data.data;
            console.info(resData);
            data = Object.assign({}, resData);
        } else {
            alert(response.data.msg)
        }
    }).catch(function (error) {
        console.log(error)
    });
    window["generateCodeData"] = data;
    return data;
}

function mergeParams(params) {
    var params_length = params.length;
    var result = '';
    if (params_length < 1) {
        return result;
    }
    if (params_length == 1) {
        return params[0];
    }
    for (var i = 0; i < params.length - 1; i++) {
        result = result + params[i] + ',';
    }
    result = result + params[params_length - 1];
    return result;
}