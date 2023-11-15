const apiUrl_listaPremio ='https://ywf90txg.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22listaPremios%22+%26%26+ativo+%3D%3D+true%5D%7B%0A++%22imageUrl%22%3A+imagem.asset-%3Eurl%2C%0A++...%0A%7D%0A%0A'

fetch(apiUrl_listaPremio)
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

        result.forEach(listaPremio => {
                const divPremios = document.getElementById('div-premios');
                
                const premios = document.createElement('div');
                const img = document.createElement('img');
                const p = document.createElement('p');

                premios.classList.add('premios');
                p.innerText = listaPremio.descricao;
                img.src = listaPremio.imageUrl;

                premios.appendChild(img);
                premios.appendChild(p);
                divPremios.appendChild(premios);
        });

    })
    .catch(error => {
        // Trata erros que podem ocorrer durante a requisição
        console.error('Erro:', error);
    });    