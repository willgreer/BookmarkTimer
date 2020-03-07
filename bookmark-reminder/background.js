

function genericOnClick(info, tab) {
	console.log("item " + info.menuItemId + " was clicked");
	console.log("info: " + JSON.stringify(info));
	console.log("tab: " + JSON.stringify(tab));
}

// item for each context type.

var contexts = ["page",
	"selection",
	"link",
	"editable",
	"image",
	"video",
	"audio"
];
	
for (var i = 0; i < contexts.length; i++) {
	var context = contexts[i];
	var title = "Test '" + context + "' menu item";
	var id = chrome.contextMenus.create({
		"title": title,
		"contexts": [context],
		"onclick": genericOnClick
	});
}


// Create a parent item and two children.
var parent = chrome.contextMenus.create({ "title": "Set Reminder" });
var child1 = chrome.contextMenus.create(
	{ "title": "Remind Me in 1 hour", "parentId": parent, "onclick": genericOnClick });
var child2 = chrome.contextMenus.create(
	{ "title": "Remind Me in 3 hours", "parentId": parent, "onclick": genericOnClick });
var child3 = chrome.contextMenus.create(
	{ "title": "Remind Me in 6 hours", "parentId": parent, "onclick": genericOnClick });
var child4 = chrome.contextMenus.create(
	{ "title": "Remind Me Tomorrow", "parentId": parent, "onclick": genericOnClick });



// Intentionally create an invalid item, to show off error checking in the
// create callback.
chrome.contextMenus.create({ "title": "Oops", "parentId": 999 }, function () {
	if (chrome.extension.lastError) {
	}
});