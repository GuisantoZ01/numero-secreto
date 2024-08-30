let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroScreto = gerarNumeroAleatorio();
let tentativas = 1



function exibirTextoNatTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;  
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female' , {rate: 1.2});

}
MenssagemInicial();

function MenssagemInicial(){
exibirTextoNatTela('h1', 'Jogo do número secreto');
exibirTextoNatTela('p','Escolha um número de 1 a ' + numeroLimite);
}


function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroScreto);

    if(chute == numeroScreto) {
        exibirTextoNatTela ('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = 'você descobriu o numero secreto com ' + tentativas + ' ' + palavraTentativa;
        exibirTextoNatTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        chute > numeroScreto ? exibirTextoNatTela('p', 'o numero secreto é menor') : exibirTextoNatTela('p', 'o numero secreto é maior');
        tentativas++  
        limparCampo();               
        } 
    }


function gerarNumeroAleatorio() {
    let NumeroEsolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(NumeroEsolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(NumeroEsolhido);
        console.log(listaDeNumerosSorteados);
        return NumeroEsolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    tentativas = 1;
    limparCampo();
    numeroScreto = gerarNumeroAleatorio();
    MenssagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}



