const apiUrl_laboratorios = 'https://ywf90txg.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27laboratorio%27%5D';

fetch(apiUrl_laboratorios)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        const laboratorios = data.result; // Suponhamos que os laboratórios estejam na propriedade 'result' dos dados.

        // Loop através dos laboratórios e exiba as informações desejadas.
        laboratorios.forEach(laboratorio => {
            const card = document.createElement('div');
            card.classList.add('card');

            const txt = document.createElement('div');
            txt.classList.add('txt');

            const lab_titulo = document.createElement('p');
            lab_titulo.classList.add('lab');
            lab_titulo.textContent = laboratorio.titulo;

            const lab_desc = document.createElement('p');
            lab_desc.classList.add('lab_desc');
            lab_desc.textContent = laboratorio.descricao;

            txt.appendChild(lab_titulo);
            txt.appendChild(lab_desc);
            card.appendChild(txt);
            
            const cardImg = document.createElement('div');
            cardImg.classList.add('card-img');
        
            const div1 = document.createElement('div');
            const div2 = document.createElement('div');

            const img = document.createElement('img');
            img.setAttribute('src', 'img-preclube/img2.png');

            const img1 = document.createElement('img');
            img.setAttribute('src', 'img-preclube/img1.png');

            const img2 = document.createElement('img');
            img.setAttribute('src', 'img-preclube/img3.png');

            const picture = document.createElement('picture');

            // Adiciona os elementos no html
            cardImg.appendChild(div1);  
                cardImg.appendChild(div2);
                  picture.appendChild(img); 
              

        });
    })
    .catch(error => {
        console.error('Erro:', error);
    });
