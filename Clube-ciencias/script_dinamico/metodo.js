// Substitua a URL abaixo pela URL da sua API
const apiUrl = 'https://ywf90txg.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27metodo%27%5D';

// Fazendo uma requisição usando fetch
fetch(apiUrl)
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
    
    result.forEach(metodo => {
        if(metodo.ativo){
        const quadrado1 = document.getElementById('quadrado1');
        const p = document.createElement('p');
        p.classList.add('vant-txt');
        p.innerText = metodo.descricao;
        quadrado1.appendChild(p);
        }
    });
    
  })
  .catch(error => {
    // Trata erros que podem ocorrer durante a requisição
    console.error('Erro:', error);
  });
