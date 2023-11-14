const apiUrl_laboratorios = 'https://ywf90txg.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27laboratorios%27%5D+%7C+order%28_createdAt+desc%29%7B%0A++%22imageUrl%22%3A+imagem_grande.asset-%3Eurl%2C%0A++%22imageUrlSmall%22%3A+imagens_pequenas%5B%5D.asset-%3Eurl%2C%0A++...%0A%7D&perspective=previewDrafts';

fetch(apiUrl_laboratorios)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {

    const result = data.result; 
    
    result.forEach((laboratorio, index) => {

      const cards = document.getElementById('cards')
      const card = document.createElement('div');   
      const txt = document.createElement('div');    
      const lab_titulo = document.createElement('p');   
      const lab_desc = document.createElement('p'); 

      const cardNone = document.createElement('div')



      const cardImg = document.createElement('div');    
      const div1 = document.createElement('div');
      const picture = document.createElement('picture');
      const img = document.createElement('img');

      
      txt.classList.add('txt'); 
      lab_titulo.classList.add('lab');  
      lab_desc.classList.add('desc-lab'); 
      cardNone.classList.add('card-img-none')


      const imgNones = laboratorio.imageUrlSmall

      for (let i = 0; i < imgNones.length; i++) {
        const imgNone = document.createElement('img');
        imgNone.setAttribute('src', imgNones[i]);
        cardNone.appendChild(imgNone);
        console.log(imgNones[i])
      }


      if (index % 2 == 0) {
        card.classList.add('card-reverse');
        cardImg.classList.add('card-img-reverse');
      } else {
        card.classList.add('card');
        cardImg.classList.add('card-img');
      }
      // adiciona a classe card-img

      lab_titulo.innerText = laboratorio.titulo; 
      lab_desc.innerText = laboratorio.descricao; 
      const labimg = laboratorio.imageUrl
      img.setAttribute('src', labimg); 
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
