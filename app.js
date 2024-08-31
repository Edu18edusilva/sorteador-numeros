function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let intervaloFormado = ate - de + 1;

    if (de >= ate) {
        alert ("O valor inserido no campo 'Do número' é maior que o valor inserido no campo 'Até o número'. Revise os valores inseridos");
    }
    if (quantidade > intervaloFormado) {
        alert ("O campo 'quantidade' deve ser maior que o intervalo formado");
    } else {
        let sorteados = [];
        let numero;
        
        for (i = 0; i < quantidade; i++) {
            numero = obterNumerosAleatorios(ate, de);
    
            while (sorteados.includes(numero)) {
                numero = obterNumerosAleatorios(ate, de);
            };
    
            sorteados.push(numero);
        };
    
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
        alterarStatusBotao();
    };
    
    function obterNumerosAleatorios(max, min) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    
    };
    
}

function alterarStatusBotao () {
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    let botaoSortear = document.getElementById('btn-sortear');
    if (botaoReiniciar.classList.contains('container__botao-desabilitado') && botaoSortear.classList.contains('container__botao')) {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');

        botaoSortear.classList.remove('container__botao');
        botaoSortear.classList.add('container__botao-desabilitado');
    } else {
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');

        botaoSortear.classList.remove('container__botao-desabilitado');
        botaoSortear.classList.add('container__botao');
    }
}

function reiniciar () {
    document.getElementById('quantidade').value = ''
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao ();
}

