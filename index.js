const fs = require("fs");
const qrcode = require("qrcode");

const urlCv = 'https://static6.depositphotos.com/1011646/553/i/600/depositphotos_5534661-stock-photo-check-mark.jpg';

const run = async() => {
    const QR = await qrcode.toDataURL(urlCv)
    const htmlContent = `
    <div style="display: flex; justify-content: center; aling-items: center;">
    <img src="${QR}">
    </div>
    `;
    fs.writeFileSync('./index.html',`${htmlContent}`)
}

run()