const apiUrl_duvidas = 'https://ywf90txg.api.sanity.io/v2021-03-25/data/query/production?query=*%5B_type+%3D%3D+%22duvidas%22%5D%7B%0A++%0A%7D&perspective=previewDrafts';

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
        
        result.forEach(duvidas => {
            if (duvidas.ativo) {
                const quadrado3 = document.getElementById('perguntas');
                
                const perguntaElement = document.createElement('p');
                perguntaElement.classList.add('vant-txt');
                perguntaElement.innerText = duvidas.pergunta;
                
                const respostaElement = document.createElement('p');
                respostaElement.classList.add('vant-txt');
                respostaElement.innerText = duvidas.resposta;
                
                quadrado3.appendChild(perguntaElement);
                quadrado3.appendChild(respostaElement);
            }
        });
        
    })
    .catch(error => {
        // Trata erros que podem ocorrer durante a requisição
        console.error('Erro:', error);
    });
