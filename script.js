//Variaveis
        const form = document.getElementById('formulario');
        const numAInput = document.getElementById('numeroA');
        const numBInput = document.getElementById('numeroB');
//função       
        form.addEventListener('submit', function(e) {
            e.preventDefault();
//convertendo variaveis em números inteiros
            const numA = parseInt(numAInput.value);
            const numB = parseInt(numBInput.value);
//condições
            if (numB > numA) {
                alert('Formulário validado! O número no campo B é maior que o do Campo A!');
                
            } else {
                alert('Opa! Formulário não validado! O numero no campo B precisa ser maior para que o formulário seja validado!');
               
            }
        });
        
    