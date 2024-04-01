const container = document.querySelector(".container");
const btn = document.querySelector("button");

container.style.width = "960px";
container.style.height = "960px";

function fillContainer(num) {
    (num > 100) && (num = 100);
    (num < 1) && (num = 1);

    squareWitdh = container.clientWidth / num + "px";
    squareHeight = container.clientHeight / num + "px";

    for(let i = 0; i < num ** 2; i++) {
        const square = document.createElement("div")
        square.classList.add("square")
        square.style.width = squareWitdh;
        square.style.height = squareHeight;
        container.appendChild(square);
    }
}

function clearContainer() {
    const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        container.removeChild(square);
    });
}

function setupHover(){
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "black";
            console.log(event);
        });
    });   
}

function setupGrid(num) {
    clearContainer();
    fillContainer(num);
    setupHover();
}

btn.addEventListener("click", () => {
    setupGrid(prompt("Choose a number of squares per side"));
});

setupGrid(16)
