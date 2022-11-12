document.getElementById("arrow").onclick = () => {
	window.location.href = "../after-ganti-foto/after-ganti-foto.html";
};

("use strict");

const video = document.getElementsByTagName("video")[0];

const handleSuccess = (stream) => {
	window.stream = stream;
	video.srcObject = stream;
};

const constraints = {
	audio: false,
	video: {
		width: 343,
		height: 600,
	},
};

async function init() {
	try {
		const stream = await navigator.mediaDevices.getUserMedia(constraints);
		handleSuccess(stream);
	} catch (e) {
		Swal.fire({
			icon: "error",
			title: "Error !",
			text: `${e.toString()}`,
			// text: " browser anda tidak mengizinkan web ini untuk mengakses kamera",
		});
	}
}

init();

const pindahHalaman = () => {
	window.location.href = "../after-ganti-foto/after-ganti-foto.html";
};

const snap = document.getElementById("submit");

const simpanData = () => {
	const img = document.getElementsByTagName("canvas")[0];
	var context = img.getContext("2d");
	context.drawImage(video, 0, 0, 341, 600);
	function getBase64Image(img) {
		var ctx = img.getContext("2d");
		ctx.drawImage(img, 0, 0, 341, 600);
		var dataURL = img.toDataURL("image/png");
		return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
	}

	bannerImage = document.getElementsByTagName("canvas")[0];
	let imgData = getBase64Image(bannerImage);
	localStorage.setItem("imgData", imgData);
};

snap.onclick = () => {
	simpanData();
	Swal.fire({
		icon: "success",
		title: "Berhasil menyimpan !",
	});

	setTimeout(pindahHalaman, 3000);
};
