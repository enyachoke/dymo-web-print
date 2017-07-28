document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        // document ready
        console.log('Start');
        navigator.usb.requestDevice({
                filters: [{
                    vendorId: 0x0922
                }]
            })
            .then(device => {
                console.log(device.productName); // "Arduino Micro"
                console.log(device.manufacturerName); // "Arduino LLC"
            })
            .catch(error => {
                console.log(error);
            });
    }
};