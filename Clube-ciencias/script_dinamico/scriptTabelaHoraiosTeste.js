// Array de objetos que representam as linhas da tabela
var dados = [
    { nome: 'João', idade: 25 },
    { nome: 'Maria', idade: 30 },
    { nome: 'Pedro', idade: 22 },
    { nome: 'Pedro', idade: 22 },
    
];

// Função para criar a tabela dinâmica
function criarTabela() {
    var tabela = document.getElementById('tabelaHorarios');
    var tbody = tabela.getElementsByTagName('tbody')[0];

    dados.forEach(function(objeto) {
        var linha = document.createElement('tr');
    
        var diaSemana = document.createElement('td');
        diaSemana.textContent = objeto.nome;
        diaSemana.classList.add('td1');
    
        var colunaIdade = document.createElement('td');
        colunaIdade.textContent = objeto.idade;
        colunaIdade.classList.add('td2');
    
        linha.appendChild(diaSemana);
        linha.appendChild(colunaIdade);
    
        tbody.appendChild(linha);

        // Adiciona uma borda arredondada à última célula
        if (dados.indexOf(objeto) === dados.length - 1) {
            diaSemana.classList.add('borda-arredondada1');
            colunaIdade.classList.add('borda-arredondada2');
        }
    });
}

criarTabela();
