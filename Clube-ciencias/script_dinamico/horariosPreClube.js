const apiUrl_horarios = 'https://ywf90txg.api.sanity.io/v2021-03-25/data/query/production?query=*%5B_type+%3D%3D+%27horarioPreClube%27%5D%7B%0A++%0A%7D&perspective=previewDrafts';

fetch(apiUrl_horarios)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        const result = data.result;
        const hora1 = document.getElementById('hora_clube'); // Suponho que você tenha um elemento com o ID 'hora_clube'
        
        result.forEach(horario => {
            const p = document.createElement('p');
            const inicio = horario.turnoManha.inicio;
            const fim = horario.turnoManha.fim;
            const modeloHora = inicio + ' - ' + fim;

            if (horario.turma === 'SuaTurma') {
                p.innerText = modeloHora;
                hora1.appendChild(p);
            }
        });
    })
    .catch(error => {
        console.error('Erro:', error);
    });
