
const calcular = document.getElementById("calcular");

calcular.onclick = function imc(){
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");

    if(nome !== '' && altura !== '' && peso!== ''){

        const valorIMC = (peso/(altura*altura)).toFixed(1);
        let rangeIMC = '';
    
        if(valorIMC <18.5){
            rangeIMC = "Abaixo do peso";
        }else if(valorIMC < 25){
            rangeIMC = "no peso ideal";
        }else if(valorIMC < 30){
            rangeIMC = "acima do peso";
        }else if(valorIMC < 35){
            rangeIMC = "com obesidade de nivel 1";
        }else if(valorIMC < 40){
            rangeIMC = "com obesidade de nivel 2";
        }else if(valorIMC < 45){
            rangeIMC = "com obesidade de nivel 3";
        }
    
        result.textContent = `${nome} o seu imc ${valorIMC} indica que vc está ${rangeIMC}`;
    }else{
        result.textContent = "Preencha todos os campos!!!";
    
    }
    
}

