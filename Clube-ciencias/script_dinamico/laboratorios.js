const apiUrl_laboratorios = 'https://ywf90txg.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27laboratorio%27%5D';

console.log('ver se o script ta rodandoaas');

fetch(apiUrl_laboratorios)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    const laboratorios = data.result; // Suponhamos que os laboratórios estejam na propriedade 'result' dos dados.

    laboratorios.forEach(laboratorio => {

        const card = document.createElement('div');
        const txt = document.createElement('div');
        const lab_titulo = document.createElement('p');
        const lab_desc = document.createElement('p');
      
        const cardImg = document.createElement('div');
        const div1 = document.createElement('div');
        const picture = document.createElement('picture');
        const img = document.createElement('img');
      
        card.classList.add('card');
        txt.classList.add('txt');
        lab_titulo.classList.add('lab');
        lab_desc.classList.add('desc-lab');
      
        cardImg.classList.add('card-img');
      
        lab_titulo.innerText = laboratorio.titulo;
        lab_desc.innerText = laboratorio.descricao;
        img.setAttribute('src', laboratorio.imagem1);
      
        txt.appendChild(lab_titulo);
        txt.appendChild(lab_desc);
        card.appendChild(txt);
      
        const sourceMobile2 = document.createElement('source');
        sourceMobile2.setAttribute('media', '(max-width: 388px)');
        sourceMobile2.setAttribute('srcset', laboratorio.imagemMobile2);
      
        const sourceMobile = document.createElement('source');
        sourceMobile.setAttribute('media', '(max-width: 630px)');
        sourceMobile.setAttribute('srcset', laboratorio.imagemMobile);
      
        picture.appendChild(sourceMobile2);
        picture.appendChild(sourceMobile);
        picture.appendChild(img);
      
        cardImg.appendChild(picture);
      
        card.appendChild(cardImg);
      
        document.querySelector('.cards').appendChild(card);

    });
  })
  .catch(error => {
    console.error('Erro ao buscar dados do Sanity:', error.message);
  });
