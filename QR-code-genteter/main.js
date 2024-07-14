// Get references to the input field and image element
let qrcodeInput = document.getElementById('qrcode-input');
let qrcodeImg = document.getElementById('qrcode-img');

// Function to generate the QR code
function generateQRCode() {
    // Construct the QR code URL
    if(qrcodeInput.value.length > 0){
        qrcodeImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrcodeInput.value);

        // Add a class if needed (make sure 'show-img' is defined in your CSS)
        qrcodeImg.classList.add('show-img');
    
        // For debugging purposes
        console.log(qrcodeImg);

    }
    else{
        
        alert("Entet the Text")
    }
   
}
