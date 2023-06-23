function compileSkin() {
  var selectedFile = document.getElementById('inputImage').files[0];
  var clothesElement = document.getElementById('verh');
  var clothesImage = clothesElement.querySelector('img');
  var clothesSrc = clothesImage.getAttribute('src');
  var nogiElement = document.getElementById('nogi');
  var nogiImage = nogiElement.querySelector('img');
  var nogiSrc = nogiImage.getAttribute('src');

  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  var img = new Image();

  img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    var installedImages = document.querySelectorAll('#verh.installed img');
    installedImages.forEach(function (installedImage) {
      var imageSrc = installedImage.src.replace('models', 'skins');
      var fileName = imageSrc.split('/').pop();
      clothesSrc = './img/skins/verh/' + fileName;
    });

    var nogiImg = new Image();
    nogiImg.onload = function () {
      ctx.drawImage(nogiImg, 0, 0, img.width, img.height);

      var clothesImg = new Image();
      clothesImg.onload = function () {
        ctx.drawImage(clothesImg, 0, 0, img.width, img.height);

        var skinImage = document.getElementById('skin-sel');
        var skinSrc = skinImage.getAttribute('src');
        var skinImg = new Image();
        skinImg.onload = function () {
          ctx.drawImage(skinImg, 0, 0, img.width, img.height);

          var downloadLink = document.createElement('a');
          downloadLink.href = canvas.toDataURL();
          downloadLink.download = 'compiled_skin.png';
          downloadLink.click();
        };
        skinImg.src = skinSrc;
      };
      clothesImg.src = clothesSrc.replace('models', 'skins');
    };
    nogiImg.src = nogiSrc.replace('models', 'skins');
  };

  img.src = URL.createObjectURL(selectedFile);
}
