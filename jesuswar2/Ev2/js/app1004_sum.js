/* Codigo App Suma */

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const suma = document.getElementById("suma");
const btnsumar = document.getElementById("btnsumar");

/* Sumar dos numeros */

btnsumar.addEventListener("click", (e) => {
    e.preventDefault();
    let n1 = parseInt (num1.value);
    let n2 = parseInt (num2.value);
    let sum = n1 + n2;

    suma.value = sum;
});