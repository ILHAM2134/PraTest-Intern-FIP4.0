const readline = require("readline");

rl = readline.createInterface({
	input: process.stdin,
	outut: process.stdout,
});

console.log("\nini adalah program pengecekan kata sandi. kata sandi harus memiliki ketentuan :\n");
console.log("- minimal 8 karakter dan maksimal 32 karakter\n");
console.log("- karakter awal tidak boleh angka\n");
console.log("- sandi harus memiliki angka\n");
console.log("- sandi harus memiliki huruf kapital dan huruf kecil\n");

console.log("silahkan masukkan sandi anda di bawah\n");

rl.question("", function (answer) {
	const isContainNumber = () => {
		for (let char of answer) {
			let intChar = parseInt(char);
			if (!isNaN(intChar)) {
				return true;
			}
		}

		return false;
	};

	const isContainLowerCapital = () => {
		var pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z]).+$");

		if (pattern.test(answer)) {
			return true;
		} else {
			return false;
		}
	};

	if (!(answer.length < 8) && !(answer.length > 32)) {
		let a;
		if (isNaN(parseInt(answer.charAt(0)))) {
			if (isContainNumber()) {
				if (isContainLowerCapital()) {
					a = "kata sandi anda valid";
					console.log(a);
				} else {
					a = "karakter harus memiliki huruf kapital dan kecil";
					console.log(a);
				}
			} else {
				a = "karakter harus memiliki angka";
				console.log(a);
			}
		} else {
			a = "karakter awal tidak boleh angka";
			console.log(a);
		}
	} else {
		a = "rentang karakter kata sandi harus 8 - 32";
		console.log(a);
	}

	rl.close();
});
