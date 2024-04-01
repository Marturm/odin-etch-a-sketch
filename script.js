const container = document.querySelector(".container");
container.style.width = "960px";
container.style.height = "960px";

function fillContainer(num) {
    clearContainer();

    (num > 100) && (num = 100);
    (num < 1) && (num = 1);

    squareWitdh = container.offsetWidth / num + "px";
    squareHeight = container.offsetHeight / num + "px";

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

fillContainer(16);

