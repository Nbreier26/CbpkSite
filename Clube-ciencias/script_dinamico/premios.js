const apiUrl_premios = 'https://ywf90txg.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27premios%27%5D'


fetch(apiUrl_premios)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        const result = data.result;

        result.forEach(premios => {
            if (premios.ativo) {
                const quadrado3 = document.getElementById('quadrado3');
                const p = document.createElement('p');
                p.classList.add('vant-txt');
                p.innerText = premios.descricao;
                quadrado3.insertBefore(p, quadrado3.children[1]);
            }
        });

    })
    .catch(error => {
        console.error('Erro:', error);
    });    