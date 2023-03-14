console.log("Welcome to Tic Tac Toe")
let tune = new Audio("ding2-89720.mp3")
let gameover = new Audio("mixkit-funny-game-over-2878.wav")
let turn = "X"
let isgameover = false;
const jsConfetti = new JSConfetti()
let cond = true;

//function to change the turn
// if turn is of X then it return 0 and if turn is of 0 then it return x

const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

//function to check for a win
const checkWin = () => {
    //it stores all the elements whose class name is boxtext in a variable boxtext
    let boxtext = document.getElementsByClassName('boxtext');
    //these are the conditions for the wins which are stored in the array wins
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    let filledBoxes = 0;
    // checks each element of the array if the winning condition is met 
    wins.forEach(e => {
        if (cond) {
            if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
                cond = false;
                //.querySelector is a method which returns the first element in the document that has a class name of info and set display won
                //boxtext[e[0]].innerText : represnt either X or 0 
                document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
                isgameover = true;
                //document.querySelector('.imgbox') returns the first element in the document with a class of imgbox, and getElementsByTagName('img')[0] returns the first img element within that element.
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "150px"
                gameover.play();
                jsConfetti.addConfetti({
                   
                    confettiRadius: 90,
                    confettiColors: [
                        '#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7',
                    ],
                    confettiNumber: 200,
                    emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸', '🎀', '🎈'],
                    emojiSize: 60,
                   
                })

            }
        }
    })
    Array.from(boxtext).forEach(element => {
        if (element.innerText !== '') {
            filledBoxes++;
        }
    })
    if (filledBoxes === 9 && !isgameover) {
        document.querySelector('.info').innerText = "Game Drawn"
        isgameover = true;
    }

}


//Game logic
//in this boxes array stores all the element whose class name is box
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    // element.querySelector('.boxtext') searches for the first element with class name boxtext that is a descendant of the element object, and returns the found element as an object.
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !isgameover) {
            boxtext.innerText = turn
            turn = changeTurn();
            tune.play();
            checkWin();

            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

            }

        }
    })
})
//add onclick listener to reset button
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    cond = true;
    turn = "X";
    isgameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0"

})





