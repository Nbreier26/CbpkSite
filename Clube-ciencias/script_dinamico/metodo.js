
const apiUrl_metodo = 'https://ywf90txg.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27metodo%27+%26%26+ativo+%3D%3D+true%5D';


fetch(apiUrl_metodo)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }
    return response.json();
  })
  .then(data => {
    const result = data.result;

    result.forEach(metodo => {
        const quadrado1 = document.getElementById('quadrado1');
        const p = document.createElement('p');
        p.classList.add('vant-txt');
        p.innerText = metodo.descricao;
        quadrado1.appendChild(p);
    });

  })
  .catch(error => {
    console.error('Erro:', error);
  });
