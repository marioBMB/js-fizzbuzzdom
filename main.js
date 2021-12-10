

let container = document.getElementById('container');


for (let i=0; i <= 1000; i++) {
    
    let boxClass = 'box';
    let index = i;
    
    if ((i % 3) == 0){
        index = "Fizz";
    }
    if ((i % 5) == 0){

        if (i % 3 == 0) {
            index += "Buzz";
        }
        else {
            index = "Buzz";
        }
    }

    boxClass += " " +index;    
    
    container.innerHTML += `<div class="${boxClass}">` + index + '</div>';

    console.log('iterazione: ', i);

    /* l'append prende solo elementi del DOM, quindi non potevamo usarlo */
}