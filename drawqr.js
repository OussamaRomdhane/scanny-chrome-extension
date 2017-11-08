function drawQRCode(url) {
	new QRCode(document.getElementById('qrcode'), {
		text: url,
		width: 200,
		height: 200,
		colorDark: '#000000',
		colorLight: '#ffffff',
		correctLevel: QRCode.CorrectLevel.H
	});
}

window.onload = function() {
	chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
		drawQRCode(tabs[0].url);
	});
};
