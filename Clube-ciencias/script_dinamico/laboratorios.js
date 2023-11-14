const apiUrl_laboratorios = 'https://ywf90txg.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27laboratorios%27%5D%7B%0A++%22imageUrl%22%3A+imagem_grande.asset-%3Eurl%2C%0A++%22imageUrlSmall%22%3A+imagens_pequenas%5B%5D.asset-%3Eurl%2C%0A++...%0A%7D&perspective=previewDrafts';

fetch(apiUrl_laboratorios)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {

    const result = data.result; // Suponhamos que os laboratórios estejam na propriedade 'result' dos dados.

    result.forEach(laboratorio => {

      const cards = document.getElementById('cards')
      const card = document.createElement('div');   // cria primeira div
      const txt = document.createElement('div');    // cria segunda div
      const lab_titulo = document.createElement('p');   // cria o primeiro p
      const lab_desc = document.createElement('p'); // cria o segundo p

      const cardNone = document.createElement('div')



      const cardImg = document.createElement('div');    // cria div da img
      const div1 = document.createElement('div');
      const picture = document.createElement('picture');
      const img = document.createElement('img');

      card.classList.add('card');   // adiciona a classe card
      txt.classList.add('txt'); // adiciona a classe txt
      lab_titulo.classList.add('lab');  // adiciona a classe lab
      lab_desc.classList.add('desc-lab'); // adiciona a classe desc-lab

      cardNone.classList.add('card-img-none')


      const imgNones = laboratorio.imageUrlSmall

      for (let i = 0; i < imgNones.length; i++) {
        const imgNone = document.createElement('img');
        imgNone.setAttribute('src', imgNones[i]);
        cardNone.appendChild(imgNone);
        console.log(imgNones[i])
      }
    
      


      cardImg.classList.add('card-img');    // adiciona a classe card-img

      lab_titulo.innerText = laboratorio.titulo; // define o titulo 
      lab_desc.innerText = laboratorio.descricao; // define a desc
      const labimg = laboratorio.imageUrl
      img.setAttribute('src', labimg); // anexa a imagem
      img.style.maxWidth = '500px';
      
      txt.appendChild(lab_titulo);
      txt.appendChild(lab_desc);
      card.appendChild(txt);
      
      
      div1.appendChild(img);
      cardImg.appendChild(div1) 
      cardImg.appendChild(cardNone)     
      card.appendChild(cardImg);

      

      cards.appendChild(card);

    });
  })
  .catch(error => {
    console.error('Erro ao buscar dados do Sanity:', error.message);
  });
