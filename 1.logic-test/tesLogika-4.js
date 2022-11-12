const completingValue = (arrData) => {
	let container = [];
	let i = 0;
	let output;

	arrData.sort(function (a, b) {
		return a - b;
	});

	for (i; i < arrData.length; i++) {
		if (arrData[i] + 1 != arrData[i + 1]) {
			output = arrData[i] + 1;
			console.log(output);
			return output;
		}
	}
};

let arr = [1, 3, 6, 2, 4, 8, 10, 9];

let test = [8, 6, 7, 12];

completingValue(test);
