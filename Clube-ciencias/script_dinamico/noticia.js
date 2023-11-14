const apiUrl_noticia = 'https://ywf90txg.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27noticia%27+%26%26+ativo+%3D%3D+true+%5D%7B%0A+++%27imageUrl%27%3A+imagem.asset-%3Eurl%2C%0A+++%27imageMobileUrl%27+%3A+imagemMobile.asset-%3Eurl%2C%0A+++++...%7D'

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

        result.forEach(noticia => {
            
                const noti = document.createElement('div');
                const txt = document.createElement('div');
                const titulo = document.createElement('p');
                const subtitulo = document.createElement('p');
                const descricao = document.createElement('p');
                const imgDesk = document.createElement('img')
                const imgMobile = document.createElement('img')
                
                noti.classList.add('noticia');
                txt.classList.add('txt');
                titulo.classList.add('titulo');
                subtitulo.classList.add('subtitulo');
                descricao.classList.add('descricao');
                
                
                titulo.innerText = noticia.titulo;
                subtitulo.innerText = noticia.subtitulo;
                descricao.innerText = noticia.conteudo;
                imgDesk.src = noticia.imageUrl
                imgMobile.src = noticia.imageMobileUrl
                
                imgDesk.classList.add('imgDesk')
                imgMobile.classList.add('imgMobile')
                imgDesk.classList.add('img-noticia')
                imgMobile.classList.add('img-noticia')
                
                txt.appendChild(titulo);
                txt.appendChild(subtitulo);
                txt.appendChild(descricao);
                noti.appendChild(txt);
                noti.appendChild(imgDesk);
                noti.appendChild(imgMobile);
                document.body.appendChild(noti)
            
        });

    })
    .catch(error => {
        // Trata erros que podem ocorrer durante a requisição
        console.error('Erro:', error);
    });    