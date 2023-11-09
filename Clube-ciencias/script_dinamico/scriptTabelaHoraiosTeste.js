// Array de objetos que representam as linhas da tabela
var dados = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 30 },
    
    
];

// Função para criar a tabela dinâmica
function criarTabela() {
    var tabela = document.getElementById('tabelaHorarios');
    var tbody = tabela.getElementsByTagName('tbody')[0];

    dados.forEach(function(objeto) {
        const linha = document.createElement('tr');
    
        const diaSemana = document.createElement('td');
        diaSemana.textContent = objeto.nome;
        diaSemana.classList.add('td1');
    
        const colunaIdade = document.createElement('td');
        colunaIdade.textContent = objeto.idade;
        colunaIdade.classList.add('td2');
    
        linha.appendChild(diaSemana);
        linha.appendChild(colunaIdade);
    
        tbody.appendChild(linha);

    });
}

criarTabela();
