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
	alert(codes);
}

function test() {
	$.ajaxSettings.xhrFields = {
		withCredentials: true
	};
	$.ajax({
		type: "GET",
		crossDomain: true,
		type: 'post',
		url: 'http://localhost:8080/test',
		dataType: 'jsonp',
		jsonp: "jsonpCallback",
		data: {
			"testString":"123456"
		},
		success: function (res) {
			alert(res.t);
        }
	});
}