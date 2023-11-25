let array1 =["gian","lorenzo","albe","giuseppe","osvaldo"];
let array2 =["carlo","fili","genna","omar","cristopher"];
let lunghezzaminima = 5





function filtraperlunghezza(array1,array2,lunghezzaminima){
    
    let arrayunito = array1.concat(array2);
    let arrayfiltrato = arrayunito.filter((index) => index.length >= lunghezzaminima);
    return arrayfiltrato
    
}

let arrayfiltrato = filtraperlunghezza(array1, array2, lunghezzaminima)
console.log(arrayfiltrato)










