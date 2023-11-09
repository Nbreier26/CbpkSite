const apiUrl_horarios = 'https://ywf90txg.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type+%3D%3D+%27horarioClube%27%5D';

fetch(apiUrl_horarios)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
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

        turma.forEach(turmaItem => {
            const TrLista = document.createElement('tr');
        
            const turmaTd = document.createElement('td');
            turmaTd.classList.add('td2');
            turmaTd.innerText = turmaItem;
        
            const diasDaSemanaTd = document.createElement('td');
            diasDaSemanaTd.classList.add('td1');
            diasDaSemanaTd.innerText = diaSemana[turma.indexOf(turmaItem)];
            
            TrLista.appendChild(diasDaSemanaTd);
            TrLista.appendChild(turmaTd);
            
        
            tbody.appendChild(TrLista);
        });
    })
    .catch(error => {
        console.error('Erro:', error);
    });
