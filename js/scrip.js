//2) creo un file Javascript:
  
   // - nel file javascript creo una variabile
        <script>
          const { createApp } = Vue

                createApp({
                    data() {
                        return {
                            message : 'Hello Vue!'
                        }
                    }
                
    //- successivamente sarà montata al div in html      

                }).mount('#app')
        </script>
