document.getElementById("arrow").onclick = () => {
	window.location.href = "../../index.html";
};

document.getElementById("kamera").onclick = () => {
	window.location.href = "../ambil-foto/ambil-foto.html";
};

document.getElementById("galeri").onclick = () => {
	window.location.href = "../ambil-galeri/ambil-galeri.html";
};

document.getElementById("simpan").onclick = () => {
	Swal.fire({
		icon: "error",
		title: "Permintaan gagal!",
		text: "Silahkan ambil foto atau pilih dari galeri dahulu",
	});
};
