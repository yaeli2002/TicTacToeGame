const btnOption = document.querySelectorAll(".button-option");
const btnRestart = document.getElementById('restart');
const popup = document.querySelector('.popup-container');
const msg = document.getElementById('massege');
const btnStartGame = document.getElementById('start-game');

/*The options to fill lines to win in a tic tac toe.*/
const WinningPossibilities = [[0, 1, 2], [2, 4, 6],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[3, 4, 5],
[6, 7, 8],
[0, 4, 8]];

let xTurn = true;
let count = 0;

const beginingGame = () => {
    count = 0;
    btnOption.forEach((option) => {
        option.innerText = "";
        option.disabled = false;
    });
    popup.classList.add("hide");
};



const endGame = (letter) => {
    btnOption.forEach((option) => option.disabled = true);
    popup.classList.remove("hide");
    if (count == 9) {
        msg.innerHTML = `&#x2639; oops.. <br>try again`;
    }
    else if (letter == "x") {
        msg.innerHTML = `&#x1F389; x wins !!`;
    }
    else {
        msg.innerHTML = `&#x1F389; o wins !!`;

    }
};

const winCheck = () => {
    for (let i of WinningPossibilities) {
        let [option1, option2, option3] = [btnOption[i[0]].innerText, btnOption[i[1]].innerText, btnOption[i[2]].innerText];
        if (option1 != "" && option2 != "" && option3 != "") {
            if (option1 == option2 && option2 == option3) {
                endGame(option1);
            }
        }
    }
};


btnOption.forEach((option) => {
    option.addEventListener('click', () => {
        if (xTurn) {
            xTurn = false;
            option.innerText = "x";
            option.disabled = true;
        }
        else {
            xTurn = true;
            option.innerText = "o";
            option.disabled = true;
        }
        count += 1;
        if (count === 9) {
            endGame();
        }
        winCheck();
    });

});

btnStartGame.addEventListener("click", () => beginingGame());
btnRestart.addEventListener("click", () => beginingGame());