
const apiUrl_certifcado = 'https://ywf90txg.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27certificados%27%5D';

fetch(apiUrl_certifcado)
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
    
    result.forEach(certificado => {
        if(certificado.ativo){
        const quadrado2 = document.getElementById('quadrado2');
        const p = document.createElement('p');
        p.classList.add('vant-txt');
        p.innerText = certificado.descricao;
        quadrado2.appendChild(p);
        }
    });
    
  })
  .catch(error => {
    // Trata erros que podem ocorrer durante a requisição
    console.error('Erro:', error);
  });