
const apiUrl_noticia = 'https://ywf90txg.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27noticia%27%5D%7B%0A++%22imageUrl%22%3A+imagem.asset-%3Eurl%2C%0A++...%0A%7D'

fetch(apiUrl_noticia)
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
        console.log(result);

        result.forEach(noticia => {
            if (noticia.ativo) {
                
                const noti = document.createElement('div');
                const txt = document.createElement('div');
                const titulo = document.createElement('p');
                const subtitulo = document.createElement('p');
                const descricao = document.createElement('p');
                
                noti.classList.add('noticia');
                txt.classList.add('txt');
                titulo.classList.add('titulo');
                subtitulo.classList.add('subtitulo');
                descricao.classList.add('descricao');
                
                
                titulo.innerText = noticia.titulo;
                subtitulo.innerText = noticia.subtitulo;
                descricao.innerText = noticia.conteudo;
                txt.appendChild(titulo);
                txt.appendChild(subtitulo);
                txt.appendChild(descricao);
                noti.appendChild(txt);
                document.body.appendChild(noti)
            
                

            }
        });

    })
    .catch(error => {
        // Trata erros que podem ocorrer durante a requisição
        console.error('Erro:', error);
    });    