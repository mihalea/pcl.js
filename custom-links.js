function customLinks() {
	console.log('[pcl.js] Adding custom links section');
	
	var customLink = "https://tv.mihalea.me/web/index.html#!/server/7b806aac2e95ce211434338bc420fd12c02c97e3/channel/%2Fvideo%2Flivetvh";

	//check if exists
	if ($('#customLibraryLink').length)
	{
		console.log('[pcl.js] Custom links section already in-place');
		return;
	}

	var libraries = $("div[role=navigation][data-qa-id=sidebarLibrariesList]");
	var live = libraries.children("div:last").clone();

	live.attr("id", "customLibraryLink");
	live.find("div[class^=SidebarLink-title").text("Live TV");
	live.find("i[class^=plex-icon").attr("class","plex-icon-shows-broadcast-560");
	live.find("button").remove();
	live.find("a")
		.attr("href", customLink)
		.attr("style", "color: hsla(0,0%,100%,.7)")

	live.appendTo(libraries);
}

interval = null;

function detectStart() {
	console.log("[pcl.js] Waiting for navigation");

	if($("div[role=navigation]").length) {
		customLinks();
		clearInterval(interval);
	}
}

$(document).ready(function() {
	customLinks();
	interval = setInterval(detectStart, 500);
});

window.onhashchange = function () {
	customLinks();
	interval = setInterval(detectStart, 500);
}
