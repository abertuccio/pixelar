const images = document.getElementsByClassName("pixelar");


[...images].forEach(img => {

    img.style.display = 'none';
    const ratio = 15;
    const alpha = 1;

    var canvasImage = document.createElement('canvas');

    canvasImage.width = img.width;
    canvasImage.height = img.height;
    const ctxImage = canvasImage.getContext('2d');
    ctxImage.drawImage(img, 0, 0, img.width, img.height);

    const canvas = document.createElement("canvas");    
    img.parentNode.insertBefore(canvas, img.nextSibling);

    canvas.width = img.width;
    canvas.height = img.height;

    var rect = img.getBoundingClientRect();
    console.log(rect);
    canvas.style.position = "absolute";
    canvas.style.left = rect.left + "px";
    canvas.style.top = rect.top + "px";

    const ctx = canvas.getContext("2d");

    calculate(ratio, ctx, ctxImage, canvas, alpha)

});




function calculate(divisor, ctx, ctxImage, canvas, alpha) {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const v = Math.floor(canvas.height / divisor);
    const h = Math.floor(canvas.width / divisor);


    for (let i = 0; i < divisor; i++) {

        for (let j = 0; j < divisor; j++) {

            var p = ctxImage.getImageData(j * h + (h / 2), i * v + (v / 2), 1, 1).data;

            ctx.fillStyle = `rgb(${p[0]},${p[1]},${p[2]},${alpha})`;
            ctx.fillRect(j * h, i * v, h, v);

        }

    }

}


var img    = canvas.toDataURL("image/png");

console.log(img)