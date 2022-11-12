const polaON = (N) => {
	if (N % 2) {
		const polaONchild = (N) => {
			let row = "";

			for (let i = 0; i < N; i++) {
				for (let j = 0; j <= i; j++) {}
			}
		};

		polaONchild(N);
	} else {
		console.log("Harus bilangan ganjil");
	}
};
