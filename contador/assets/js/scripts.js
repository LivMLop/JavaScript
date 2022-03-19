var cont = 0;
const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
    cont++;
    CURRENT_NUMBER.innerHTML = cont;
}

function decrement() {
    cont--;
    CURRENT_NUMBER.innerHTML = cont;
    if(CURRENT_NUMBER < 0){
    }
}