// console.log('jest');
const button = document.querySelector('.button');
let i = 0;
const boxDiv = document.querySelector('.content');
const boxClass = 'smallbox';


function addBox() {
    i++;
    console.log(i);
    // console.log(iRest5);
    // console.log(iRest15);
    boxDiv.innerHTML += `<div class="${boxClass} small${i}">${i}</div>`
    if (i % 5 == 0) {
        if (i % 15 == 0) {
            const diffRoundBox = document.querySelector(`.small${i}`);
            diffRoundBox.classList.add('diffroundbox');
        } else {
            const roundBox = document.querySelector(`.small${i}`);
            roundBox.classList.add('roundbox');
        }
    }


}
button.addEventListener('click', addBox);