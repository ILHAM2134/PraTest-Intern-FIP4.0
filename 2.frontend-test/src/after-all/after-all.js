document.getElementById("photo-logo").onclick = () => {
	window.location.href = "../ganti-foto/ganti-foto.html";
};

document.getElementById("img").onclick = () => {
	window.location.href = "../ganti-foto/ganti-foto.html";
};

const tampilkanFoto = () => {
	if (localStorage.length) {
		var storageKey = localStorage.key(0);
		var dataImage = localStorage.getItem(storageKey);
		let img = document.getElementById("img");
		img.setAttribute("src", "data:image/png;base64," + dataImage);
		console.log(storageKey);
	} else {
		document.getElementById("img").style.display = "none";
	}
};

document.addEventListener("DOMContentLoaded", tampilkanFoto());
