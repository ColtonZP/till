var denArray = [100, 50, 20, 10, 5, 1, .25, .10, .05, .01, 10, 5, 2, .5];
var sum;

const table = document.querySelector('table');
const input = document.querySelectorAll('input');
const total = document.querySelectorAll('#total');
const totalSum = document.querySelector('#totalSum');

table.addEventListener('input', (event) => {
    for (let i = 0; i < input.length; i++) {
        if (event.target === input[i]) { 
            total.textContent = '0';
            total[i].textContent = '$' + calc(event.target.value, denArray[i]);
        }
    }
    totalSum.textContent = '$' + addAll();
});

function calc(inp, den) {
    return ((inp * 100) * den)/100;
}

function addAll() {
    sum = 0;
    for (let i = 0; i < total.length; i++) {
        sum += Number(total[i].textContent.substr(1, total[i].textContent.length))*100;
    }
    return sum/100;
}