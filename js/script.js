let clickedIdElement = false;
let clickedQueryElement = false;

const variantNumber = 19; 
const targetIndex = (variantNumber % 10) + 1;

document.querySelectorAll("ul li").forEach((item, index) => {
    const elementIndex = index + 1; 
    item.id = `element-${elementIndex}`; 

    item.addEventListener("click", () => {
        if (elementIndex === targetIndex) {
            item.classList.toggle("clicked"); 
        } else if (elementIndex === targetIndex + 1) {
            item.classList.toggle("query-clicked");
        }
    });
});

const imageContainer = document.getElementById("image");

document.getElementById("addImage").addEventListener("click", () => {
    const existingImage = document.getElementById("image");
    if (!existingImage) {
        const img = document.createElement("img");
        img.id = "image";
        img.src = "https://upload.wikimedia.org/wikipedia/commons/f/fa/Монумент_Незалежності_України_Майдан.jpg";
        img.alt = "Київ";
        img.width = 400;
        document.body.appendChild(img);
    } else {
        alert("Зображення вже додано!");
    }
});

document.getElementById("increaseImage").addEventListener("click", () => {
    const imageContainer = document.getElementById("image");
    if (imageContainer) {
        imageContainer.width += 50;
    }
});

document.getElementById("decreaseImage").addEventListener("click", () => {
    const imageContainer = document.getElementById("image");
    if (imageContainer && imageContainer.width > 50) {
        imageContainer.width -= 50;
    }
});

document.getElementById("removeImage").addEventListener("click", () => {
    const imageContainer = document.getElementById("image");
    if (imageContainer) {
        imageContainer.remove();
    }
});