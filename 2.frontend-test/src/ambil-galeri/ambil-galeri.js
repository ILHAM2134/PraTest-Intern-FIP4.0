document.getElementById("arrow").onclick = () => {
	window.location.href = "../ganti-foto/ganti-foto.html";
};

document.getElementById("simpan").onclick = () => {
	saveToLocalStorage();

	Swal.fire({
		icon: "success",
		title: "Berhasil !",
		text: "Foto anda berhasil diganti",
	});

	const pindahHalaman = () => {
		window.location.href = "../after-all/after-all.html";
	};

	const myTimeout = setTimeout(pindahHalaman, 3000);
};

function saveToLocalStorage() {
	var imgcanvas = document.getElementById("canv1");
	var fileinput = document.getElementById("myFile");
	var image = new SimpleImage(fileinput);
	image.drawTo(imgcanvas);

	function getBase64Image(imgcanvas) {
		var ctx = imgcanvas.getContext("2d");
		ctx.drawImage(imgcanvas, 0, 0, 341, 600);
		var dataURL = imgcanvas.toDataURL("image/png");
		return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
	}

	let imgGallery = getBase64Image(imgcanvas);
	localStorage.setItem("imgGallery", imgGallery);
}
