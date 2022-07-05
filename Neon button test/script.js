let compBoard = document.querySelector('.compboard');
let compBoardSpan = document.querySelector('.compboardspan')

let playerBoard = document.querySelector('.playerboard');
let playBoardSpan = document.querySelector('.playboardspan')

document.querySelector('.playerboard').addEventListener('click', function() {
    playerBoard.className = 'playerboard2'
    playBoardSpan.className = 'playboardspan2'
});

document.querySelector('.compboard').addEventListener('click', function() {

    compBoard.className = 'compboard2'
    compBoardSpan.className = 'compboardspan2'
//     if(secspan.style.color == 'rgba(255, 255, 255, 0.2)') {
//         switchGLowEffect(1, 'white') // On
// } else {
//     switchGLowEffect(0, 'rgba(255, 255, 255, 0.2)') // Off
// }
});