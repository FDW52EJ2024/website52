const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const operacion = document.getElementById("operacion")
const result = document.getElementById("result")
const btncalcular = document.getElementById("btncalcular")

btncalcular.addEventListener("click", e =>{

e.preventDefault();
let n1 = parseInt(num1.value);
let n2 = parseInt(num2.value);
let o = operacion.value; let r;
    switch(o){
        case "+": r = n1+n2;
                result.value=r;
                break;  
        
        case "-": r = n1-n2;
                result.value=r;
                break;
        
        case "*": r = n1*n2;
                result.value=r;
                break;
                
                
        case "/": r = n1/n2;
                result.value=r;
                break;


        default: result.value="operacion no valida";
    }


})

