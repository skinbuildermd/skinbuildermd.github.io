function displaySelectedFile(event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = function(event) {
        var image = document.getElementById("skin-sel");
        image.setAttribute('src', event.target.result);
      };      

    reader.readAsDataURL(file);
}