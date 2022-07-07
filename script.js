let num, firstNum, secondNum, empty, operation;

const btn = document.getElementsByTagName("button");
const visual = document.getElementById("screen");

function add(firstNum, secondNum) {
    return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
} 

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
    return secondNum === 0
        ? alert("Error, cannot divide by 0")
        : firstNum / secondNum;
}

function operate(string, firstNum, secondNum) {
    if (string === "+") {
        return add(firstNum, secondNum);
    } else if (string === "-") {
        return subtract(firstNum, secondNum);
    } else if (string === "x") {
        return multiply(firstNum, secondNum);
    } else if (string === "÷") {
        return divide(firstNum, secondNum);
    }
}

function isNum(btnPressed) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].indexOf(btnPressed) > -1;
}

const displayNum = function pupulateDisplay() {
    let value = [];
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function () {
        let textFrmBtn = btn[i].innerHTML;

        if (textFrmBtn == "AC") {
            firstNum = undefined;
            secondNum = undefined;
            empty = undefined;
            num = undefined;
            value = [];
            visual.textContent = "0";
        }
        if (isNum(Number(textFrmBtn)) | (textFrmBtn == ".")) {
            value.push(textFrmBtn);
            num = Number(value.join(""));
            visual.textContent = num;
        } else {
            return;
        }
        if (empty == undefined) firstNum = num;
        else secondNum = num;
        });
        empty = num;
    }
}

function clickOperate() {
    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function (event) {
        if (["+", "-", "x", "÷"].indexOf(this.innerHTML) > -1) {
            if (secondNum == undefined) {
            operation = this.innerHTML;
            displayNum();
            visual.textContent = firstNum;
            } else {
            displayNum();
            visual.textContent = operate(operation, firstNum, secondNum);
            firstNum = operate(operation, firstNum, secondNum);
            operation = this.innerHTML;
            }
        } else if (this.innerHTML == "=") {
            if (firstNum == undefined) {
            return;
            } else if (secondNum == undefined) {
            visual.textContent = operate(operation, firstNum, firstNum);
            firstNum = visual.textContent;
            } else visual.textContent = operate(operation, firstNum, secondNum);
        }
        });
    }
}

displayNum();
clickOperate();
