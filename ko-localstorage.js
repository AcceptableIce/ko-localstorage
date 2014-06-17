(function (ko) {
	ko.extenders.localStorage = function (target, key) {
		var isArray = ko.isObservable(target) && target.push;

		target.subscribe(function (newValue) {
			localStorage.setItem(key, isArray ? JSON.stringify(newValue) : newValue);
		});


		if (localStorage[key] != undefined) {
			var val = isArray ? JSON.parse(localStorage[key]) : localStorage[key];
			if (val == 'true') val = true;
			if (val == 'false') val = false;
	        	if(Number(val) != NaN) return Number(val);
				target(val);
			}

		return target;
	}
})(ko);
