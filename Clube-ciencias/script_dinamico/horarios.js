const apiUrl_horarios = 'https://ywf90txg.api.sanity.io/v2021-03-25/data/query/production?query=*%5B_type+%3D%3D+%22horarios%22%5D%7B%0A++%0A%7D&perspective=previewDrafts';

fetch(apiUrl_horarios)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }

        return response.json();
    })
    .then(data => {
        const result = data.result;

        result.forEach(horario => {
            // Verifique se a turma é a desejada (substitua 'SuaTurma' pelo nome da turma desejada)
            if (horario.turma === 'SuaTurma') {
                // const quadrado3 = document.getElementById('');

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
        });

    })
    .catch(error => {
        console.error('Erro:', error);
    });
