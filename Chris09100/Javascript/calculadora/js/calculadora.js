const Num1 = document.getElementById("numero1")
const Num2 = document.getElementById("numero2")
const Operador = document.getElementById("operador")
const Resultado = document.getElementById("resultado")
const Operacion = document.getElementById("btnOperacion")

Operacion.addEventListener("click", e => {
    e.preventDefault();
    const valor1 = parseInt(num1.value);
    const valor2 = parseInt(num2.value);
    const oper = operador.value.trim();
    /* SUMA */
    if (oper == "+" ) {
        res = valor1 + valor2
        Resultado.value = res
    }
    /* RESTA */
    else if (oper == "-" ) {
        res = valor1 - valor2
        Resultado.value = res
    }
    /* MULTIPLICACION */
    else if (oper == "*" ) {
        res = valor1 * valor2
        Resultado.value = res
    }
    /* DIVISION */
    else if (oper == "/" ) {
        res = valor1 / valor2
        Resultado.value = res
    }
    /* POTENCIA */
    else if (oper == "**" ) {
        res = valor1 ** valor2
        Resultado.value = res
    }
    else {
        alert("Operador no Valido")
    }
    

})