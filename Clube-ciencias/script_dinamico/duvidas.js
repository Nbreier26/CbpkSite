const apiUrl_duvidas = 'https://ywf90txg.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27duvidas%27%5D%0A';

fetch(apiUrl_duvidas)
    .then(response => {
        // Verifica se a resposta da requisição foi bem-sucedida (código 200)
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }
        
        // Converte a resposta para JSON
        return response.json();
    })
    .then(data => {
        const result = data.result;
        
        result.forEach((duvidas, indice) => {
            if (duvidas.ativo) {
              const p = document.createElement("p");
              const frequente = document.getElementById('frequente');
              const divCollapse = document.createElement("div");
              const divCard = document.createElement('div');
              
              divCard.className = 'card card-body';
              
              divCollapse.className = "collapse";
              divCollapse.id = "collapseExample" + indice;  // Usando o índice para gerar um ID único
          
              const botao = document.createElement("button");
              
              botao.className = "campo-freq";
              botao.type = "button";
              botao.setAttribute("data-bs-toggle", "collapse");
              botao.setAttribute("data-bs-target", "#collapseExample" + indice);  // Usando o índice no target
              botao.setAttribute("aria-expanded", "false");
              botao.setAttribute("aria-controls", "collapseExample" + indice);  // Usando o índice no controle
              botao.textContent = duvidas.pergunta;
              divCard.innerText = duvidas.resposta;
          
              p.appendChild(botao);
              
              frequente.appendChild(p);
              divCollapse.appendChild(divCard);
              frequente.appendChild(divCollapse);
            }
          });
          
        
    })
    .catch(error => {
        // Trata erros que podem ocorrer durante a requisição
        console.error('Erro:', error);
    });
