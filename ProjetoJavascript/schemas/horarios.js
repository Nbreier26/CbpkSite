export default {
    name: 'horarios',
    type: 'document',
    title: 'Horários',
    fields: [
      {
        name: 'turnoManha',
        type: 'object',
        title: 'Turno Manhã',
        fields: [
            {
                name: 'inicio',
                type: 'time',
                title: 'Inicio'
            },
            {
                name: 'fim',
                type: 'time',
                title: 'Fim'
            }
        ]
      },
      {
        name: 'turnoTarde',
        type: 'object',
        title: 'Turno Tarde',
        fields: [
            {
                name: 'inicio',
                type: 'time',
                title: 'Inicio'
            },
            {
                name: 'fim',
                type: 'time',
                title: 'Fim'
            }
        ]
      },
      {
        name: 'diasDaSemana',
        type: 'array',
        title: 'Dias da semana',
        of: [{type: 'string'}]
      },
      {
        name: 'turma',
        type: 'string',
        title: 'Turma'
      }
    ]
  }