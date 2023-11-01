export default {
  name: 'horarioPreClube',
  type: 'document',
  title: 'Horários Pre-Clube',
  fields: [
    {
      name: 'turnoManha',
      type: 'object',
      title: 'Turno Manhã',
      fields: {
        inicio: {
          type: 'string',
          title: 'Inicio'
        },
        fim: {
          type: 'string',
          title: 'Fim'
        }
      }
    },
    {
      name: 'turnoTarde',
      type: 'object',
      title: 'Turno Tarde',
      fields: {
        inicio: {
          type: 'string',
          title: 'Inicio'
        },
        fim: {
          type: 'string',
          title: 'Fim'
        }
      }
    },
    {
      name: 'diasTurma',
      type: 'array',
      title: 'Dias e Turmas',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'diaDaSemana',
              type: 'string',
              title: 'Dia da Semana'
            },
            {
              name: 'turma',
              type: 'string',
              title: 'Turma'
            }
          ]
        }
      ]
    }
  ]
}
