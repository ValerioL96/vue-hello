Consegna:

Stampare a schermo un messaggio all’interno di un h1, utilizzando i data:

1) creo un file html:

    - importo VueJs usando il link dell CDN
      (<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>);

    - creo un div in html in cui Vue verrà utilizzato
      (<div id="app"></div>);


2) creo un file Javascript:
  
    - importo javascript in html usando il suo link
     (<script src="./js/script.js"></script>);
    - nel file javascript creo una variabile
        (<script>
          const { createApp } = Vue


    - questa variabile avrà una funzione che dovrà riportere un messagio da me deciso
                createApp({
                    data() {
                        return {
                            message: 'Hello Vue!'
                        }
                    }
                
    - successivamente sarà montata al div in html          
                }).mount('#app')
        </script>)

    - in html per far sì che accada ciò metterò la variabile message nel div
      (<div id="app">{{message}}</div>)

      
