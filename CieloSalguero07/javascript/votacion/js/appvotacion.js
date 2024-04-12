const edad = document.getElementById("edad");
const resultado = document.getElementById("resultado");
const btmVerificar = document.getElementById("btnVereficar");

btmVerificar.addEventListener("click", (e) => {
    e.preventDefault();

    let age= parseInt (edad.value)
    if (age<18){
        resultado.value = "No puede votar";
    }
    else {
        resultado.value = "Puedes votar";
    }
});