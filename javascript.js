const containerDiv = document.querySelector("#container");

const makeRow = () => {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("divRow");

    for (let i = 0; i < 16; i++) {
        const div = document.createElement("div");
        div.classList.add("drawBox");
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "black"
        });
        rowDiv.appendChild(div);
    }
    return rowDiv;
};

const makeGrid = () => {
    for (let i = 0; i < 16; i++) {
        const rowDiv = makeRow();
        containerDiv.appendChild(rowDiv);
    }
};

makeGrid();

