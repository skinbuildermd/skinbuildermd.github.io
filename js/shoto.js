
// Получаем все элементы с классом "verh-go"
var verhGoElements = document.querySelectorAll("[id^='verh-go']");

// Добавляем обработчик событий к каждому элементу
verhGoElements.forEach(function (element) {
element.addEventListener("click", function () {
  var imageUrl = this.src;
  var image = document.createElement("img");
  image.src = imageUrl;
  image.alt = "Image";

  if (this.id === "nogi-go") {
    var divNogi = document.getElementById("nogi");
    divNogi.innerHTML = ""; // Очищаем содержимое блока "nogi"
    divNogi.appendChild(image);
  } else {
    var divInstalled = document.createElement("div");
    divInstalled.classList.add("installed");
    divInstalled.id = "verh";
    divInstalled.innerHTML = '<img id="verh-skin" src="' + imageUrl + '">';

    var existingDivVerh = document.getElementById("verh");
    existingDivVerh.parentNode.replaceChild(divInstalled, existingDivVerh);
  }
});
});

document.getElementById('inputImage').addEventListener('change', displaySelectedFile);

      // Получаем все элементы с классом "installed"
      var installedBlocks = document.querySelectorAll('.installed');

      // Перебираем полученные элементы и добавляем обработчик события на клик
      installedBlocks.forEach(function(block) {
        var deleteButton = block.querySelector('#del-img');
        deleteButton.addEventListener('click', function() {
          // Удаляем родительский блок, содержащий изображение
          block.remove();
        });
      });

      document.getElementById('inputImage').addEventListener('change', displaySelectedFile);