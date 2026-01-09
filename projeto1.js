
const botaoValor = document.querySelectorAll('.valor');
const botao = document.querySelectorAll('button.valor, .conta');
const input = document.getElementById('a3');
const botaoConta = document.querySelectorAll('.conta');
const botaoResult = document.getElementById('resultado');
const botaoDel = document.getElementById('excluir');
botao.forEach (botao => {botao.addEventListener('click', () => {
    if (input.value === 'erro' || input.value === 'err' || input.value === 'er' || input.value === 'e') {
        input.value = '';
    } else {input.value += botao.textContent;}
});});
botaoDel.addEventListener('click', () => {input.value = input.value.slice(0, -1);});

function calcular(expressao) {
    return math.evaluate(expressao);
};

botaoResult.addEventListener('click', () => {const expressao = input.value;
    if (expressao === '') {input.value = 'erro';
    }
    try { const conta = calcular(expressao);
    input.value = conta;
        
    } catch (e) {
        input.value = 'erro';

    }

});



