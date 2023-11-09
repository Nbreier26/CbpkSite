const apiUrl_laboratorios = 'https://ywf90txg.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27laboratorio%27%5D';

console.log('ver se o script ta rodandoaa');

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
      card.classList.add('card'); // Use 'card' instead of 'cards'

      const txt = document.createElement('div');
      txt.classList.add('txt');

      const lab_titulo = document.createElement('p');
      lab_titulo.classList.add('lab');
      lab_titulo.textContent = laboratorio.titulo;
      
      txt.appendChild(lab_titulo);

      const lab_desc = document.createElement('p');
      lab_desc.classList.add('desc-lab');
      lab_desc.textContent = laboratorio.descricao;

      txt.appendChild(lab_desc);
      
      card.appendChild(txt);

      const cardImg = document.createElement('div');
      cardImg.classList.add('card-img');
      

      const div1 = document.createElement('div');

      const picture = document.createElement('picture');

        // Adicione as fontes ao elemento 'picture' conforme especificado no HTML
        const sourceMobile2 = document.createElement('source');
        sourceMobile2.setAttribute('media', '(max-width: 388px)');
        sourceMobile2.setAttribute('srcset', 'img-preclube/img2-mobile2.png');
        picture.appendChild(sourceMobile2);

        const sourceMobile = document.createElement('source');
        sourceMobile.setAttribute('media', '(max-width: 630px)');
        sourceMobile.setAttribute('srcset', 'img-preclube/img2-mobile.png');
        picture.appendChild(sourceMobile);

        const imgElement = document.createElement('img');
        imgElement.setAttribute('src', 'img-preclube/img2.png');
        imgElement.setAttribute('alt', '');
        picture.appendChild(imgElement);

        // Adicione o elemento 'picture' ao DOM
        div1.appendChild(picture);

        // Adicione a estrutura de imagem ao DOM
        cardImg.appendChild(div1);

        // Adicione cardImg ao card
        card.appendChild(cardImg);

      document.querySelector('.cards').appendChild(card);
    });
  })
  .catch(error => {
    console.error('Erro ao buscar dados do Sanity:', error.message);
  });
