function hideNonAlexBlocks() {
    var blocks = document.querySelectorAll('[data-skin]');
    for (var i = 0; i < blocks.length; i++) {
      if (blocks[i].getAttribute('data-skin') !== 'alex') {
        blocks[i].style.display = 'none';
      } else {
        blocks[i].style.display = '';
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var alexBlock = document.getElementById('alex');
    if (alexBlock) {
      alexBlock.addEventListener('click', hideNonAlexBlocks);
    }
  });

  function hideNonSteveBlocks() {
    var blocks = document.querySelectorAll('[data-skin]');
    for (var i = 0; i < blocks.length; i++) {
      if (blocks[i].getAttribute('data-skin') !== 'steve') {
        blocks[i].style.display = 'none';
      } else {
        blocks[i].style.display = '';
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var steveBlock = document.getElementById('steve');
    if (steveBlock) {
      steveBlock.addEventListener('click', hideNonSteveBlocks);
    }
  });

  function clearFilters() {
    var blocks = document.querySelectorAll('[data-skin]');
    for (var i = 0; i < blocks.length; i++) {
      blocks[i].style.display = '';
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var clearFiltersElement = document.querySelector('.clear-filters');
    if (clearFiltersElement) {
      clearFiltersElement.addEventListener('click', clearFilters);
    }
  });