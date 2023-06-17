/* Change button */
const fileInput = document.getElementById("inputImage");
const labelText = document.getElementById("labelText");
const imagePreview = document.querySelector(".pix-skin img");
const verhPixelImage = document.getElementById("verh-pixel");
let selectedClothes = "./img/skins/models/mod_1!Milyan.png"; // Initially selected clothes

fileInput.addEventListener("change", function() {
    const files = this.files;
    if (files && files.length > 0) {
        labelText.textContent = "Выберите файл";

        const reader = new FileReader();
        reader.onload = function(e) {
            const { result } = e.target;
            imagePreview.src = result;
            const imageSrc = result;
            const fileName = files[0].name.replace("mod_", "");
            const imagePath = `./img/skins/${fileName}`;
            verhPixelImage.src = imagePath;
            selectedClothes = imageSrc; // Save the selected clothes
        };
        reader.readAsDataURL(files[0]);
    } else {
        labelText.textContent = "Файл";
        imagePreview.src = "";
        verhPixelImage.src = selectedClothes.replace("models/mod_", "");
    }
});

/* Verh-select-btn */
const wBlocks = document.querySelectorAll(".w");
const installedBlock = document.getElementById("verh");
let selectedUpperClothes = "./img/skins/models/mod_1!Milyan.png"; // Initially selected upper clothes
let selectedLowerClothes = "./img/skins/models/mod_2!Milyan.png"; // Initially selected lower clothes

for (const wBlock of wBlocks) {
    const wImage = wBlock.querySelector("img");
    wBlock.addEventListener("click", function() {
        const imageSrc = wImage.getAttribute("src");
        selectedUpperClothes = imageSrc; // Save the selected upper clothes
        installedBlock.innerHTML = `<img src="${imageSrc}" alt="Верхняя одежда">`;
    });
}

/* Select Lower Clothes */
function selectLowerClothes(element) {
    const cElements = document.querySelectorAll(".clothes .c");
    for (const cElement of cElements) {
        cElement.classList.remove("selected");
    }
    element.classList.add("selected");

    const wElements = document.querySelectorAll(".w");
    for (let i = 0; i < wElements.length; i++) {
        const wElement = wElements[i];
        if (i === 0) {
            wElement.innerHTML = `<img src="./img/skins/models/mod_2!Milyan.png" alt="Нижняя одежда">`;
        } else {
            if (wElement.parentElement.id === "nogi") {
                wElement.innerHTML = `<img src="${selectedLowerClothes}" alt="Нижняя одежда">`;
                wElement.classList.remove("w");
                wElement.classList.add("n");
            } else {
                wElement.classList.remove("n");
                wElement.classList.add("w");
            }
        }
    }
}

/* Change Clothes */
function changeClothes() {
    // Your logic to change clothes
}

/* Compile button */
const compileButton = document.getElementById("compileButton");
compileButton.addEventListener("click", function() {
    const skinSelImage = document.getElementById("skin-sel");
    const verhPixelImage = document.getElementById("verh-pixel");

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = skinSelImage.naturalWidth;
    canvas.height = skinSelImage.naturalHeight;

    context.drawImage(skinSelImage, 0, 0);
    context.drawImage(verhPixelImage, 0, 0, skinSelImage.naturalWidth, skinSelImage.naturalHeight);

    const link = document.createElement("a");
    link.href = canvas.toDataURL();
    link.download = "compiled_skin.png";
    link.click();
});

let selectedUpperClothesRed = "./img/skins/models/mod_1!Milyan.png"; // Initially selected red upper clothes
let selectedLowerClothesRed = "./img/skins/models/mod_2!Milyan.png"; // Initially selected red lower clothes

function selectUpperClothes(element) {
    const cElements = document.querySelectorAll(".clothes .c");
    for (const cElement of cElements) {
        cElement.classList.remove("selected");
    }
    element.classList.add("selected");

    const wElements = document.querySelectorAll(".w");
    for (let i = 0; i < wElements.length; i++) {
        const wElement = wElements[i];
        if (i === 0) {
            wElement.innerHTML = `<img src="${selectedUpperClothesRed}" alt="Верхняя одежда">`;
        } else {
            if (wElement.parentElement.id === "nogi") {
                wElement.innerHTML = `<img src="${selectedUpperClothesRed}" alt="Верхняя одежда">`;
            } else {
                wElement.classList.remove("w");
                wElement.classList.add("n");
            }
        }
    }
}
