const readline = require("readline");

rl = readline.createInterface({
	input: process.stdin,
	outut: process.stdout,
});

console.log("\nini adalah program untuk menampilkan angka kelipatan 3 dan 7 dalam sebuah array sebanyak N\n");
console.log("angka yang merupakan kelipatan 3 DAN 7 akan ditampilkan sebagai Z\n");

console.log("silahkan masukkan angka N yang anda kehendaki di bawah\n");

rl.question("", function (answer) {
	let N = parseInt(answer);
	let container = [];
	let i = 0;

	while (container.length < N) {
		if (!(i % 3) && !(i % 7)) {
			if (i != 0) {
				container.push("N");
			}
		} else if (!(i % 3)) {
			container.push(i);
		} else if (!(i % 7)) {
			container.push(i);
		}

		i++;
	}

	console.log(container);
	rl.close();
});
