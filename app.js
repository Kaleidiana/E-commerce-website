const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [{
        id: 1,
        title: "Air Force",
        price: 4500,
        colors: [
            { code: "red", img: "./My Images/AIR.png" },
            { code: "blue", img: "./My Images/Air2.png" },
        ],
    },
    {
        id: 2,
        title: "Louis Vuitton",
        price: 5500,
        colors: [
            { code: "white", img: "./My Images/LV.png" },
            { code: "green", img: "./My Images/LV (2).png" },
        ],
    },
    {
        id: 3,
        title: "Puma",
        price: 2300,
        colors: [
            { code: "white", img: "./My Images/puma.png" },
            { code: "black", img: "./My Images/PUMA2.png" },
        ],
    },
    {
        id: 4,
        title: "Slider",
        price: 3500,
        colors: [
            { code: "black", img: "./My Images/Shoe.png" },
            { code: "pink", img: "./My Images/Slider2.png" },
        ],
    },
    {
        id: 5,
        title: "Jordans",
        price: 3000,
        colors: [
            { code: "black", img: "./My Images/Jordans.png" },
            { code: "purple", img: "./My Images/Nike.png" },
        ],
    },
];

let chosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // Change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        // Change the chosen product
        chosenProduct = products[index];
        // Change texts of currentProduct
        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = "Ksh " + chosenProduct.price;
        currentProductImg.src = chosenProduct.colors[0].img;
        // Assigning colors
        currentProductColors.forEach((color, colorIndex) => {
            color.style.backgroundColor = chosenProduct.colors[colorIndex].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = chosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });

        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});