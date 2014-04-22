(function (ko) {
	ko.extenders.localStorage = function (target, key) {
		target.subscribe(function (newValue) {
			localStorage.setItem(key, newValue);
		});


		if (localStorage[key] != undefined) {
			var val = localStorage[key];
			if (val == 'true') val = true;
			if (val == 'false') val = false;
	        	if(Number(val) != NaN) return Number(val);
				target(val);
			}

		return target;
	}
})(ko);
