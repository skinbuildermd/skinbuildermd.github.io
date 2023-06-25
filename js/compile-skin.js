function compileSkin() {
  var selectedFile = document.getElementById('inputImage').files[0];
  var clothesElement = document.getElementById('verh');
  var clothesImage = clothesElement.querySelector('img');
  var clothesSrc = clothesImage ? clothesImage.getAttribute('src') : null;
  var nogiElement = document.getElementById('nogi');
  var nogiImage = nogiElement.querySelector('img');
  var nogiSrc = nogiImage ? nogiImage.getAttribute('src') : null;

  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  var img = new Image();

  img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    if (clothesSrc) {
      var clothesImg = new Image();
      clothesImg.onload = function () {
        ctx.drawImage(clothesImg, 0, 0, img.width, img.height);

        if (nogiSrc) {
          var nogiImg = new Image();
          nogiImg.onload = function () {
            ctx.drawImage(nogiImg, 0, 0, img.width, img.height);
            compileSkinImage(canvas);
          };
          nogiImg.src = nogiSrc.replace('models', 'skins');
        } else {
          compileSkinImage(canvas);
        }
      };
      clothesImg.src = clothesSrc.replace('models', 'skins');
    } else if (nogiSrc) {
      var nogiImg = new Image();
      nogiImg.onload = function () {
        ctx.drawImage(nogiImg, 0, 0, img.width, img.height);
        compileSkinImage(canvas);
      };
      nogiImg.src = nogiSrc.replace('models', 'skins');
    } else {
      compileSkinImage(canvas);
    }
  };

  img.src = URL.createObjectURL(selectedFile);
}

function compileSkinImage(canvas) {
  var skinImage = document.getElementById('skin-sel');
  var skinSrc = skinImage.getAttribute('src');
  var skinImg = new Image();
  skinImg.onload = function () {
    var ctx = canvas.getContext('2d');
    ctx.drawImage(skinImg, 0, 0, canvas.width, canvas.height);

    var downloadLink = document.createElement('a');
    downloadLink.href = canvas.toDataURL();
    downloadLink.download = 'compiled_skin.png';
    downloadLink.click();
  };
  skinImg.src = skinSrc;
}