
function rimuoviElementoArray(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] == elemento) {
            lista.splice(i,1);
        }
    }
    return lista;
}


function ModificaElementoArray(lista, elementoArray, nuovoElemento) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] == elementoArray) {
            lista[i] = nuovoElemento;
        }
    }
    return lista;
}






















alert("Buongiorno,qui potrai aggiornare la tua lista di componenti assemblaggio del pc")

let inizio

let listacomponenti=["processore","schede ram","memoria SSD","hard disk","case","scheda madre","dissipatore ad aria","dissipatore liquido","scheda grafica","alimentatore","monitor","mouse","tastiera","cuffie","casse audio" ]

while(inizio !=0){
    
     

    inizio=parseInt(prompt("prema 1 per aggiungere un elemento alla lista, prema 2 per eliminare un elemento dalla lista, prema 3 per ordinare la lista in ordine alfabetico,prema 4 per modificare un elemento della lista,prema 5 per eliminare l'intera lista,prema 6 per visualizzare la lista,prema 0 per uscire."))
    
    switch(inizio){

        case 1: let aggiuntaelemento= prompt("cosa desideri aggiungere?")
        listacomponenti.push(aggiuntaelemento);
        alert("adesso la tua lista è"+" "+listacomponenti)

        break;


        case 2: 
                    let prodottoDaRimuovere = prompt("Inserisci l'elemento che vuoi rimuovere dalla lista componenti:");
            listacomponenti = rimuoviElementoArray(listacomponenti, prodottoDaRimuovere);
            alert("Elemento rimosso")
            alert("Ecco la tua lista aggiornata: " + listacomponenti);
            break;
        
                
            

            
           
        
            
        
      


        case 3: listacomponenti.sort();
        alert(listacomponenti)

            
       
        
         break;

        
        case 4: let prodottoDaModificare = prompt("Inserisci il prodotto da sostituire:");
        let prodottoDaAggiornare = prompt("Inserisci il nuovo prodotto:");
        listacomponenti = ModificaElementoArray(listacomponenti, prodottoDaModificare, prodottoDaAggiornare);
        alert("La tua lista è stata aggiornata con successo!")
        alert("Ecco la tua lista aggiornata: " + listacomponenti);
        break;
        






        

        
       case 5: listacomponenti.length=0
       addiolista=listacomponenti

       alert("la tua lista è vuota")

       break;


        case 6: alert("ecco la tua lista"+" "+ listacomponenti)
           

    }
        
        

              

        
        
        
        
        
        
    
}

console.log(listacomponenti)