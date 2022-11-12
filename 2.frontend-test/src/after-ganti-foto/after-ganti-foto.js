document.getElementById("arrow").onclick = () => {
	window.location.href = "../ambil-foto/ambil-foto.html";
};

document.getElementById("kamera").onclick = () => {
	window.location.href = "../ambil-foto/ambil-foto.html";
};

document.getElementById("galeri").onclick = () => {
	window.location.href = "../ambil-galeri/ambil-galeri.html";
};

const tampilkanFoto = () => {
	var dataImage = localStorage.getItem("imgData");
	let img = document.getElementById("img");
	img.setAttribute("src", "data:image/png;base64," + dataImage);
};

document.addEventListener("DOMContentLoaded", tampilkanFoto());

document.getElementById("simpan").onclick = () => {
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
