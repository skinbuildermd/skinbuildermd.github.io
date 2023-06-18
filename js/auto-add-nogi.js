const allCloatScroll = document.querySelector('.all-cloat-scroll');
const nogiFolder = './img/models/nogi/';

fetch(nogiFolder)
  .then(response => response.text())
  .then(text => {
    const parser = new DOMParser();
    const html = parser.parseFromString(text, 'text/html');
    const images = html.querySelectorAll('a');
    images.forEach(image => {
      if (image.href.match(/\.(jpe?g|png|gif)$/)) {
        const img = document.createElement('img');
        img.src = nogiFolder + image.textContent;
        const div = document.createElement('div');
        div.classList.add('w');
        div.appendChild(img);
        allCloatScroll.appendChild(div);
      }
    });
  });
