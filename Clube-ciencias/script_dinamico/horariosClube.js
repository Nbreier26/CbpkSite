const apiUrl_horarios = 'https://ywf90txg.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22horarios%22%5D';

fetch(apiUrl_horarios)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        const result = data.result;
        console.log(result);

        result.forEach(horario => {
            const hora1 = document.getElementById('hora_clube');
            const p1 = document.createElement('p');
            const inicio1 = horario.turnoManha.inicio;
            const fim1 = horario.turnoManha.fim;
            const modeloHora = inicio1 + ' - ' + fim1;
            p1.innerText = modeloHora;
            hora1.appendChild(p1);

            const hora2 = document.getElementById('hora2_clube');
            const p2 = document.createElement('p');
            const inicio2 = horario.turnoTarde.inicio;
            const fim2 = horario.turnoTarde.fim;
            const modeloHora2 = inicio2 + ' - ' + fim2;
            p2.innerText = modeloHora2;
            hora2.appendChild(p2);

            const horariodia = horario.diasDaSemana;

            horariodia.forEach((diaSemana, indice) => {
                
                
            });
        });
    })
    .catch(error => {
        console.error('Erro:', error);
    });
