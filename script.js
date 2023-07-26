let allButtons = document.querySelectorAll(".btn");
const displayScreen = document.querySelector(".screen");
let switchedOn = false;
let onButton = document.querySelector(".btn.on");

for (let button of allButtons) {

    button.addEventListener("click", (e) => {

        let text = e.target.innerHTML;

        if (text === "ON") {
            switchedOn = true;
            onButton.innerHTML = "OFF";
            displayScreen.value = "0";
        }
        else if (text === "OFF") {
            switchedOn = false;
            onButton.innerHTML = "ON";
            displayScreen.value = "";
        }
        else {
            if (switchedOn) {
                if (text === ".") {
                    if (displayScreen.value.indexOf(".") === -1
                        ||
                        ((displayScreen.value.lastIndexOf("-") > displayScreen.value.indexOf("."))
                            && (displayScreen.value.lastIndexOf("-") > displayScreen.value.lastIndexOf(".")))
                        || ((displayScreen.value.lastIndexOf("+") > displayScreen.value.indexOf("."))
                            && (displayScreen.value.lastIndexOf("+") > displayScreen.value.lastIndexOf("."))
                        )
                        || ((displayScreen.value.lastIndexOf("*") > displayScreen.value.indexOf("."))
                            && (displayScreen.value.lastIndexOf("*") > displayScreen.value.lastIndexOf("."))
                        )
                        || ((displayScreen.value.lastIndexOf("/") > displayScreen.value.indexOf("."))
                            && (displayScreen.value.lastIndexOf("/") > displayScreen.value.lastIndexOf("."))
                        )
                    ) {
                        displayScreen.value += text;
                    }
                }
                else if (text === "DEL") {
                    displayScreen.value = displayScreen.value.slice(0, -1);
                    if (displayScreen.value.length === 0) {
                        displayScreen.value = "0";
                    }
                }
                else if (text === "AC") {
                    displayScreen.value = "0";
                }
                else if (text === "=") {
                    displayScreen.value = eval(displayScreen.value);
                }
                else if (text.indexOf("+") != -1
                    || text.indexOf("*") != -1
                    || text.indexOf("-") != -1
                    || text.indexOf("/") != -1
                ) { 
                    // if text is + or - or * or /
                    let lastCharacter = displayScreen.value.charAt(displayScreen.value.length - 1);
                    if (lastCharacter === "+"
                        || lastCharacter === "-"
                        || lastCharacter === "*"
                        || lastCharacter === "/") {
                        displayScreen.value = displayScreen.value.slice(0, -1) + text;
                    }
                    else {
                        displayScreen.value += text;
                    }
                }
                else {
                    if (displayScreen.value === "0")
                        displayScreen.value = "";
                    displayScreen.value += text;
                }
            }
        }
    })
}