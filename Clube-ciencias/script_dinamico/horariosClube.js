const apiUrl_horarios = 'https://ywf90txg.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27horarioClube%27%5D';

fetch(apiUrl_horarios)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data.result[0])
        const result = data.result;
        const horario = result[0];

        const turnoManhaHora = document.getElementById('turnoManhaHora');
        const inicio1 = horario.turnoManha.inicio;
        const fim1 = horario.turnoManha.fim;
        turnoManhaHora.innerText = inicio1 + ' - ' + fim1;

        const turnoTardeHora = document.getElementById('turnoTardeHora');
        const inicio2 = horario.turnoTarde.inicio;
        const fim2 = horario.turnoTarde.fim;
        turnoTardeHora.innerText = inicio2 + ' - ' + fim2;

        const turma = horario.turma;
        const diaSemana = horario.diasDaSemana;
        const tbody = document.getElementById('tbody');

        for (let i = 0; i < turma.length; i++) {
            const TrLista = document.createElement('tr');
            const turmaTd = document.createElement('td');
            turmaTd.classList.add('td1');
            turmaTd.innerText = turma[i];
            TrLista.appendChild(turmaTd);
            const diasDaSemanaTd = document.createElement('td');
            diasDaSemanaTd.classList.add('td2');
            diasDaSemanaTd.innerText = diaSemana[i];
            TrLista.appendChild(diasDaSemanaTd);
            tbody.appendChild(TrLista);
        }
    })
    .catch(error => {
        console.error('Erro:', error);
    });
