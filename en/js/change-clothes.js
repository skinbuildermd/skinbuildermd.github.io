function changeClothes(clothesType) {
  var images = document.querySelectorAll('.w img');
  var selectedNogi = document.querySelector('.nogi.selected');
  var nogiElement = document.getElementById('nogi');
  var wElements = document.querySelectorAll('.w');
  var verhElements = document.querySelectorAll('.verh');
  var filterButtons = document.querySelectorAll('.btns-filter img');
  var clearFilterButton = document.querySelector('.clear-filters');

  if (clothesType === 'nogi') {
    images.forEach(function (image) {
      var src = image.getAttribute('src');
      var newSrc = src.replace('/verh/', '/nogi/').replace('verh_', 'nogi_');
      image.src = newSrc;
      image.id = 'nogi-go';
      var nogiAddElement = document.getElementById('nogi-add');
      nogiAddElement.classList.add('selected');
    });

    if (selectedNogi) {
      if (selectedNogi.classList.contains('selected')) {
        selectedNogi.innerHTML = '<img class="nogi" src="' + wElements[0].querySelector('img').getAttribute('src') + '">';
      }
    }

    verhElements.forEach(function (verhElement) {
      verhElement.classList.remove('selected');
    });

    wElements.forEach(function (wElement) {
      var image = wElement.querySelector('img');
      if (image && image.getAttribute('id') === 'verh-go') {
        image.removeAttribute('id');
      }
    });

    disableFilterButtons();
    disableClearFilterButton();
  } else if (clothesType === 'verh') {
    images.forEach(function (image) {
      var src = image.getAttribute('src');
      var newSrc = src.replace('/nogi/', '/verh/').replace('nogi_', 'verh_');
      image.src = newSrc;
      image.removeAttribute('id');
      var nogiAddElement = document.getElementById('nogi-add');
      nogiAddElement.classList.remove('selected');
    });

    wElements.forEach(function (wElement) {
      var image = wElement.querySelector('img');
      if (image && image.getAttribute('id') !== 'verh-go') {
        image.id = 'verh-go';
      }
    });

    enableFilterButtons();
    enableClearFilterButton();
  }

  verhElements.forEach(function (verhElement) {
    verhElement.addEventListener('click', function () {
      verhElements.forEach(function (el) {
        el.classList.remove('selected');
      });
      verhElement.classList.add('selected');
    });
  });
}

function disableFilterButtons() {
  var filterButtons = document.querySelectorAll('.btns-filter img');
  filterButtons.forEach(function (button) {
    button.style.pointerEvents = 'none';
    button.style.filter = 'grayscale(100%)';
  });
}

function enableFilterButtons() {
  var filterButtons = document.querySelectorAll('.btns-filter img');
  filterButtons.forEach(function (button) {
    button.style.pointerEvents = 'auto';
    button.style.filter = 'none';
  });
}

function disableClearFilterButton() {
  var clearFilterButton = document.querySelector('.clear-filters');
  clearFilterButton.style.pointerEvents = 'none';
  clearFilterButton.style.filter = 'grayscale(100%)';
}

function enableClearFilterButton() {
  var clearFilterButton = document.querySelector('.clear-filters');
  clearFilterButton.style.pointerEvents = 'auto';
  clearFilterButton.style.filter = 'none';
}
