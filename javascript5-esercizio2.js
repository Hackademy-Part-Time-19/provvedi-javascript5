let numeri=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]




function filtranumeri(numeri){
    let filtro= numeri.filter((index)=> index %2==0);
    return filtro
    
}


let filtro= filtranumeri(numeri)
console.log(filtro)



