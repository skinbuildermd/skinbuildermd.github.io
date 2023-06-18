document.addEventListener('DOMContentLoaded', function() {
    var nogiElement = document.querySelector('.nogi');
    var verhElement = document.querySelector('.verh');

    nogiElement.addEventListener('click', function() {
        nogiElement.classList.add('selected');
        verhElement.classList.remove('selected');
    });

    verhElement.addEventListener('click', function() {
        verhElement.classList.add('selected');
        nogiElement.classList.remove('selected');
    });
});