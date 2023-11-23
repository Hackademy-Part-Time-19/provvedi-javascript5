alert("Buongiorno,qui potrai aggiornare la tua lista di componenti assemblaggio del pc")

let inizio

let listacomponenti=["processore,schede ram,memoria SSD,hard disk,case,scheda madre,dissipatore ad aria,dissipatore liquido,scheda grafica,alimentatore,monitor,mouse,tastiera,cuffie,casse audio" ]

while(inizio !=0){
    
     

    inizio=parseInt(prompt("prema 1 per aggiungere un elemento alla lista, prema 2 per eliminare un elemento dalla lista, prema 3 per ordinare la lista in ordine alfabetico,prema 4 per modificare un elemento della lista,prema 5 per eliminare l'intera lista,prema 6 per visualizzare la lista,prema 0 per uscire."))
    
    switch(inizio){

        case 1: let aggiuntaelemento= prompt("cosa desideri aggiungere?")
        listacomponenti.push(aggiuntaelemento);
        alert("adesso la tua lista è"+" "+listacomponenti)

        break;


        case 2: let eliminazioneelemento=prompt("cosa desideri eliminare?")

        
       
        alert("adesso la tua lista è"+" "+listacomponenti)

        break;


        case 3: let comparazione= function (){
            
            let nome1=prodotto1.nome.toLowercase()
            let nome2=prodotto2.nome.toLowercase()

            if(nome1<nome2){
                return -1;
            } else if(nome1>nome2){
                return 1;
            }else{
                return 0
            }

            }
            let ordinamentoalfabetico=listacomponenti.sort(comparazione)

                
        
        
                
        alert("ecco la tua lista in ordine alfabetico"+" "+ordinamentoalfabetico)
        

        

        break;

        
        case 4: let modificaelemento=prompt("cosa desideri modificare?")
        






        break;

        
       case 5: listacomponenti.length=0
       addiolista=listacomponenti

       alert("la tua lista è vuota")

       break;


        case 6: alert("ecco la tua lista"+" "+ listacomponenti)
           


        
        

              

        
        
        
        
        
        
    }
}

console.log(listacomponenti)