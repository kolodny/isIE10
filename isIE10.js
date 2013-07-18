window.isIE10 = (function(){
  var matches = navigator.userAgent.match(/MSIE\s?(\d+)(?:\.(\d+))?/i);
		
	if (matches) {
		if (+matches[1] === 10) {
			return true;
		}
	}
	return false;
})();
