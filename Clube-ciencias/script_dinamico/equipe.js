const apiUrl_equipe = 'https://ywf90txg.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27equipe%27+%26%26+ativo+%3D%3D+true%5D+%7C+order%28_createdAt+asc%29%7B%0A++%22imageUrl%22%3A+Foto.asset-%3Eurl%2C%0A++%0A++...%0A%7D';

fetch(apiUrl_equipe)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    return response.json();
  })
  .then(data => {
    const result = data.result;

    result.forEach(equipe => {
      
        const divSep = document.getElementById('sep');
        const divProfs = document.createElement('div');
        const divNome = document.createElement('div');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const avatar = document.createElement('img');
        const section = document.getElementById('equipe');

        divSep.setAttribute("id", "sep");
        divProfs.classList.add('profs');
        divNome.setAttribute("id", "nome")

        h3.innerText = equipe.nome;
        p.innerText = equipe.cargo;
        avatar.src = equipe.imageUrl;

        divNome.appendChild(h3);
        divNome.appendChild(p); 
        divProfs.appendChild(avatar);
        divProfs.appendChild(divNome);
        divSep.appendChild(divProfs);

        section.appendChild(divSep);
      }
    );

  })
  .catch(error => {
    console.error('Erro:', error);
  });
