function hideTooltip() {
    // Получаем ссылку на элемент с помощью его id
    var tooltip = document.getElementById("tooltip");
  
    // Скрываем элемент
    tooltip.style.display = "none";
  
    // Сохраняем состояние в localStorage
    localStorage.setItem("tooltipHidden", "true");
  }
  
  // Проверяем состояние при загрузке страницы
  window.onload = function() {
    var tooltip = document.getElementById("tooltip");
  
    // Проверяем, был ли блок скрыт ранее
    if (localStorage.getItem("tooltipHidden") === "true") {
      tooltip.style.display = "none";
    }
  
    // Добавляем обработчик события наведения мыши
    tooltip.addEventListener("mouseover", hideTooltip);
  };   