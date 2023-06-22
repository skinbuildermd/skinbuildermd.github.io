function displaySelectedFile(event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function(event) {
        var image = document.getElementById("skin-sel");
        image.style.backgroundImage = "url('" + event.target.result + "')";
    };

    reader.readAsDataURL(file);
}

function uploadSelectedFile() {
    var input = document.getElementById("inputImage");
    displaySelectedFile(input);
}

// Добавляем обработчик события "change" к элементу <input>
var input = document.getElementById("inputImage");
input.addEventListener("change", displaySelectedFile);
