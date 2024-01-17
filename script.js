function calculateFibonacci() {
const number = document.getElementById('number').value;

if (!isNaN(number) && number > 0) {
    const result = fibonacci(parseInt(number, 10));
        document.getElementById('result').innerHTML = `El Fibonacci de ${number} es: ${result}`;
} else {
        document.getElementById('result').innerHTML = 'Por favor, ingrese un número entero positivo';
    }
}

function fibonacci(n) {
const sequence = [0, 1];

for (let i = 2; i < n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
}

return sequence;
}