document.addEventListener("DOMContentLoaded", () => {
    let imgBox = document.getElementById("imgBox");
    let qrImage = document.getElementById("qrImage");
    let qrText = document.getElementById("qrText");

    function GenerateQR() {
        let data = qrText.value;
        if (data.trim() === "") {
            alert("Please enter some text or a URL");
            return;
        }
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(data)}`;
        imgBox.classList.add("show-img");
    }

    // Bind the GenerateQR function to the global window object for button's onclick to work
    window.GenerateQR = GenerateQR;
});
