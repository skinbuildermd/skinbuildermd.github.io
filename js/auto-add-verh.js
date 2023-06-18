window.onload = function() {
    const folder = './img/models/verh/';
    const allCloatScroll = document.querySelector('.all-cloat-scroll');
    fetch(folder)
      .then(response => response.text())
      .then(text => {
        const parser = new DOMParser();
        const html = parser.parseFromString(text, 'text/html');
        const files = Array.from(html.querySelectorAll('a'))
          .map(a => a.href)
          .filter(href => href.endsWith('.png') || href.endsWith('.jpg') || href.endsWith('.jpeg'));
        files.forEach(file => {
          const div = document.createElement('div');
          div.classList.add('w');
          const img = document.createElement('img');
          img.src = file;
          div.appendChild(img);
          allCloatScroll.appendChild(div);
        });
      });
  };
