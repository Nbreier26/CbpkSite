export default {
    name: 'horariosclube',
    type: 'document',
    title: 'Horários Clube',
    fields: [
      {
        name: 'turnoManha',
        type: 'object',
        title: 'Turno Manhã',
        fields: [
          {
            name: 'inicio',
            type: 'string',
            title: 'Inicio'
          },
          {
            name: 'fim',
            type: 'string',
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
            type: 'string',
            title: 'Inicio'
          },
          {
            name: 'fim',
            type: 'string',
            title: 'Fim'
          }
        ]
        },
        
      {
        name: 'diasDaSemana',
        type: 'array',
        title: 'Dias da semana',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'dia',
                type: 'string',
                title: 'Dia',
                options: {
                  list: ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira'],
                }
              }
            ]
          }
        ],
        options: {
          layout: 'tags'
        }
      },
      {
        name: 'turma',
        type: 'string',
        title: 'Turma'
      }
    ]
  }
  