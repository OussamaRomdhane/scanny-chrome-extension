chrome.browserAction.onClicked.addListener(function(tab) {
	alert('coool');
	chrome.extension.getBackgroundPage().drawQRCode(tab.url);
	alert(tab.url);
});
