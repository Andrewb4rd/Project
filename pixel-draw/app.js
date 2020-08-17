function makeGrid() {
    for (c = 0; c < 64; c++) {
        const newdiv = $("<div>").addClass("cell");
        $(".grid").append(newdiv);
    }
}
makeGrid();

function makePalette() {
    const PALETTE = [
        "red",
        "blue",
        "green",
        "orange",
        "indigo",
        "violet",
        "yellow",
        "black",
        "white",
    ];
    for (let index = 0; index < PALETTE.length; index = index + 1) {
        const nextColor = PALETTE[index];
        const newbutton = $("<button>").css("background-color", nextColor);
        $(".palette").append(newbutton);
    }
    $(".palette button").first().addClass("active");
}
makePalette();

function onPaletteClick() {
    $(".palette button").removeClass("active");
    $(this).addClass("active");
}
$(".palette button").click(onPaletteClick);

$(".grid .cell").click(onGridClick);

function onGridClick() {
    const backgroundColor = $(".active").css("background-color");
    //$(this).css("background-color", backgroundColor);
    if ($(this).css("background-color") === backgroundColor) {
        $(this).css("background-color", "");
    } else {
        $(this).css("background-color", backgroundColor);
    }
}

$(".controls .clear").click(onClearClick);

function onClearClick() {
    $(".grid .cell").css("background-color", "");
}

function onFillAllClick() {
    const bg = $(".active").css("background-color");
    $(".cell").css("background-color", bg);
}
$(".controls .fill-all").click(onFillAllClick);

function onFillEmptyClick() {
    const elements = $(".grid .cell");
    for (let index = 0; index < elements.length; index = index + 1) {
        let nextElement = $(elements[index]);
        if (nextElement.css("background-color") === "rgba(0, 0, 0, 0)") {
            const bg = $(".active").css("background-color");
            $(nextElement).css("background-color", bg);
        }
    }
}

$(".controls .fill-empty").click(onFillEmptyClick);