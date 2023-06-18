const inputImage = document.querySelector('#inputImage');
const skinSel = document.querySelector('#skin-sel');

inputImage.addEventListener('change', function() {
    if (this.files && this.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            skinSel.src = e.target.result;
        }
        reader.readAsDataURL(this.files[0]);
    }
});
