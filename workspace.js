/* TODO: Change toolbox XML ID if necessary. Can export toolbox XML from Workspace Factory. */
var toolbox = document.getElementById("toolbox");

var options = {
    toolbox: toolbox,
    collapse: true,
    comments: true,
    disable: true,
    maxBlocks: Infinity,
    trashcan: true,
    horizontalLayout: false,
    toolboxPosition: 'start',
    css: true,
    media: 'https://blockly-demo.appspot.com/static/media/',
    rtl: false,
    scrollbars: true,
    sounds: true,
    oneBasedIndex: true
};

/* Inject your workspace */
var workspace = Blockly.inject(blocklyDiv, options);

/* Load Workspace Blocks from XML to workspace. Remove all code below if no blocks to load */

/* TODO: Change workspace blocks XML ID if necessary. Can export workspace blocks XML from Workspace Factory. */
var workspaceBlocks = document.getElementById("workspaceBlocks");

/* Load blocks to workspace. */
Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);

function showCode() {

    // Generate JavaScript code and display it.
    var topBlocks = workspace.getAllBlocks();
    var codes = [];
    var contractBlock = workspace.getTopBlocks()[0];
    console.log('contractBlock' + contractBlock.toString());
    console.log(topBlocks)
    for (var i = 0; i < topBlocks.length; i++) {
        if (topBlocks[i] == contractBlock) {
            var code = Blockly.codelabGenerator.blockToCode(topBlocks[i]);
            codes.push(code + '\n');
        }
    }
    console.log(codes);
    let tmp = codes[0].replace('\n', '').split('@');
    console.log(tmp);
    var url = 'http://localhost:9014/api/generate/code?fileIds=' + tmp[1] + '&contractName=' + tmp[0];
    var response = sendHttpGet(url);
    // alert(response);
}

function compile() {
    var url = 'http://localhost:9014/api/truffle/code/compile';
    var response = sendHttpGet(url);
}

function deploy(){
    var url = 'http://localhost:9014/api/truffle/code/deploy';
    var response = sendHttpGet(url);
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
            let data = eval("(" + json + ")").data;
            console.log(data);
            alert(data);
            return json;
        }
    };
}