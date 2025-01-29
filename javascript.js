const containerDiv = document.querySelector("#container");
let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
const submitButton = document.querySelector(".submitButton");
const resetButton = document.querySelector(".resetButton");
let number1 = 16;
let number2 = 16;

const makeRow = () => {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("divRow");
    for (let i = 0; i < number1; i++) {
        const div = document.createElement("div");
        div.classList.add("drawBox");
        div.addEventListener("mouseenter", () => {
            const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
            ${Math.floor(Math.random() * 256)}, 
            ${Math.floor(Math.random() * 256)})`;
            div.style.backgroundColor = randomColor;
        });
        rowDiv.appendChild(div);
    }
    return rowDiv;
};

const makeGrid = () => {
    containerDiv.innerHTML = '';
    for (let i = 0; i < number2; i++) {
        const rowDiv = makeRow();
        containerDiv.appendChild(rowDiv);
    }
};

resetButton.addEventListener("click", () => {
    const allDrawBoxes = document.querySelectorAll(".drawBox");
    allDrawBoxes.forEach(div => {
        div.style.backgroundColor = "white";
    });
});

submitButton.addEventListener("click", () => {
    number1 = parseInt(input1.value);
    number2 = parseInt(input2.value);
    if (isNaN(number1) || isNaN(number2) || number1 <= 0 || number2 <= 0) {
        alert("Please enter valid positive numbers for both dimensions.");
        return;
    }
    makeGrid();
});

makeGrid();