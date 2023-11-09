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

      const card = document.createElement('div');   // cria primeira div
      const txt = document.createElement('div');    // cria segunda div
      const lab_titulo = document.createElement('p');   // cria o primeiro p
      const lab_desc = document.createElement('p'); // cria o segundo p

      const cardImg = document.createElement('div');    // cria div da img
      const div1 = document.createElement('div');
      const picture = document.createElement('picture');
      const img = document.createElement('img');

      card.classList.add('card');   // adiciona a classe card
      txt.classList.add('txt'); // adiciona a classe txt
      lab_titulo.classList.add('lab');  // adiciona a classe lab
      lab_desc.classList.add('desc-lab'); // adiciona a classe desc-lab

      cardImg.classList.add('card-img');    // adiciona a classe card-img

      lab_titulo.innerText = laboratorio.titulo; // define o titulo 
      lab_desc.innerText = laboratorio.descricao; // define a desc
      img.setAttribute('src', laboratorio.imagem1); // anexa a imagem
      
      txt.appendChild(lab_titulo);
      txt.appendChild(lab_desc);
      card.appendChild(txt);
      parentElement.appendChild(picture);
      div1.appendChild(img);
      cardImg.appendChild(div1);      
      card.appendChild(cardImg);

      document.querySelector('.cards').appendChild(card);

    });
  })
  .catch(error => {
    console.error('Erro ao buscar dados do Sanity:', error.message);
  });
