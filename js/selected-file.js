function displaySelectedFile(event) {
    var input = document.getElementById("inputImage");

    // Добавляем обработчик события "change" к элементу <input>
    input.addEventListener("change", displaySelectedFile);
    
    // Функция для отображения выбранного файла
    function displaySelectedFile(event) {
        var file = event.target.files[0];
        var reader = new FileReader();
    
        reader.onload = function(event) {
            var image = document.getElementById("skin-sel");
            image.setAttribute('src', event.target.result);
        };
    
        reader.readAsDataURL(file);
    }
}