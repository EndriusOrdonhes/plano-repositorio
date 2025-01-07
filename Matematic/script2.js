const n1 = 1, n2 = 2

function somar(numero1, numero2){
    return numero1 + numero2
}

console.log(somar(n1,n2), "resultado da soma")

function sub(numero1, numero2){
    return numero1 - numero2
}
console.log(sub(10,9), "resultado da subtracao")

// const multi = (numero1, numero2) =>{
// return numero1 * numero 2
// }

const multi = (numero1, numero2) => numero1 * numero2
console.log(multi(n1, n2), "resultado da multiplicacao")

const divisaoCondicionalTermaria = (numero1, numero2) => numero2 !== 0 ? numero1 / numero2 : "Nao pode ser"
function divisao(numero2, numero2){
    if (numero2 |== 0) {
        return numero1 / numero2
    } else {
        return "Nao pode ser 0"
    }
}
console.log(div(n1, n2), "resultado da divisao")

function calcular(n1, n2, operador){
    if(operador === "+"){
        return n1 + n2
    } else if (operador === -){
        return n1 - n2
    } else if (operador === "*"){
        return n1 * n2
    } else if(operador === "/")
        return n2 === 0 ? "Nao pode ser 0" : parseFloat(n1/n2). toFixed(1)
 } else {
    return "operador invalido"
 }
 console.log(calcular(2,3, "/"))

 function calcularComSwitchCase (x1, x2, op){
    switch ((op)) {
        case "+":
            return x1+x2
        case "-":
            return x1-x2
        case "*":
        return x1*x2
        case "/":
            return x2 === 0 ? "Nao pode ser 0" : (x1/x2). toFixed(1)
        default:
            return "Operador invalido"
    }
 }
 console.log(calcular(n1, n2, "*")),
 console.log (parseFloat(calcular(n1, n2, "/"))),
 console.log(calcular(n1, n2, "+")),
 console.log(calcular(n1, n2, "-"))