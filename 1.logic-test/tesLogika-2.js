const readline = require("readline");

rl = readline.createInterface({
	input: process.stdin,
	outut: process.stdout,
});

console.log("\nini adalah program pencarian string 'sang gajah', 'serigala', dan 'harimau\n");
console.log("user memasukkan inut teks melalui console/ terminal\n");
console.log("output berupa 'sang gajah', 'serigala' dan 'harimau' sesuai teks yg diinputkan user\n");

console.log("silahkan masukkan teks yang anda kehendaki di bawah\n");

rl.question("", function (answer) {
	let container = [];
	let recentValue = "";

	let arrayTxt = answer.split(" ");

	arrayTxt.forEach((element, index) => {
		let el = element.toLowerCase();

		if (el.includes("serigala")) {
			container.push(el);
		} else if (el.includes("harimau")) {
			container.push(el);
		} else if (el.includes("sang")) {
			if (arrayTxt[index + 1].includes("gajah")) {
				container.push("sang gajah");
			}
		}
	});

	console.log(container);
	rl.close();
});
