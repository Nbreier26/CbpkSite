<<<<<<< Updated upstream
const apiUrl_horarios = 'https://ywf90txg.api.sanity.io/v2021-03-25/data/query/production?query=*%5B_type+%3D%3D+%27horarioPreClube%27%5D%7B%0A++%0A%7D&perspective=previewDrafts';
=======
<<<<<<< HEAD:Clube-ciencias/script_dinamico/horarios.js
const apiUrl_horarios = 'https://ywf90txg.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%22horarios%22%5D';
=======
const apiUrl_horarios = 'https://ywf90txg.api.sanity.io/v2021-03-25/data/query/production?query=*%5B_type+%3D%3D+%27horarioPreClube%27%5D%7B%0A++%0A%7D&perspective=previewDrafts';
>>>>>>> 931f65d951850cd72f49ccae82e2210ec25cbfd2:Clube-ciencias/script_dinamico/horariosPreClube.js
>>>>>>> Stashed changes

fetch(apiUrl_horarios)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }

        return response.json();
    })
    .then(data => {
        const result = data.result;
<<<<<<< Updated upstream

        result.forEach(horario => {
            // Verifique se a turma é a desejada (substitua 'SuaTurma' pelo nome da turma desejada)
            if (horario.turma === 'SuaTurma') {
                const quadrado3 = document.getElementById('');

                // Iterar sobre os dias da semana e seus horários
                horario.diasDaSemana.forEach(diaDaSemana => {
                    const diaElement = document.createElement('p');
                    diaElement.classList.add('vant-txt');
                    diaElement.innerText = `Dia da Semana: ${diaDaSemana.dia}`;

                    const turnoManhaElement = document.createElement('p');
                    turnoManhaElement.classList.add('vant-txt');
                    turnoManhaElement.innerText = `Turno da Manhã: ${diaDaSemana.turnoManha.inicio} - ${diaDaSemana.turnoManha.fim}`;

                    const turnoTardeElement = document.createElement('p');
                    turnoTardeElement.classList.add('vant-txt');
                    turnoTardeElement.innerText = `Turno da Tarde: ${diaDaSemana.turnoTarde.inicio} - ${diaDaSemana.turnoTarde.fim}`;

                    // Adicione os elementos à página
                    quadrado3.appendChild(diaElement);
                    quadrado3.appendChild(turnoManhaElement);
                    quadrado3.appendChild(turnoTardeElement);
                });
            }
=======
        console.log(result)

        result.forEach(horario => {
<<<<<<< HEAD:Clube-ciencias/script_dinamico/horarios.js
            
            const hora1 = document.getElementById('hora_clube');
            const p = document.createElement('p')
            const inicio = horario.turnoManha.inicio
            const fim = horario.turnoManha.fim
            const modeloHora = inicio + ' - ' + fim;
=======
            // Verifique se a turma é a desejada (substitua 'SuaTurma' pelo nome da turma desejada)
            if (horario.turma === 'SuaTurma') {
                const quadrado3 = document.getElementById('');
>>>>>>> 931f65d951850cd72f49ccae82e2210ec25cbfd2:Clube-ciencias/script_dinamico/horariosPreClube.js

            p.innerText = modeloHora
            hora1.appendChild(p)

            
            
>>>>>>> Stashed changes
        });

    })
    .catch(error => {
        console.error('Erro:', error);
    });
