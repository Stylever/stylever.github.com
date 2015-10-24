define(function () {
	
	var browserObj = {language: 1}; // 0 English 1 Chinese
	if (navigator.userAgent.indexOf("MSIE") == -1) { // not ie 
		var random = Math.random() * 100;
		if (random >= 30 && random <= 80) {
			browserObj.language = 0;
		}
    } 

    return browserObj;
});