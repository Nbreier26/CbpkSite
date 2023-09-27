export default {
    name: 'preClube',
    type: 'document',
    title: 'Pré-Clube',
    fields: [
      {
        name: 'descricao',
        type: 'string',
        title: 'Descrição'
      },
      {
        name: 'imagem',
        type: 'image',
        title: 'Imagem'
      },
      {
        name: 'faixaIdade',
        type: 'object',
        title: 'Faixa de Idade',
        fields: [
          {
            name: 'inicio',
            type: 'number',
            title: 'Início'
          },
          {
            name: 'fim',
            type: 'number',
            title: 'Fim'
          }
        ]
      },
      {
        name: 'horarios',
        type: 'object',
        title: 'Horários',
        fields: [
          {
            name: 'turnoManha',
            type: 'object',
            title: 'Turno Manhã',
            fields: [
              {
                name: 'inicio',
                type: 'string',
                title: 'Início'
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
                title: 'Início'
              },
              {
                name: 'fim',
                type: 'string',
                title: 'Fim'
              }
            ]
          },
          {
            name: 'diasSemana',
            type: 'array',
            title: 'Dias da Semana',
            of: [{ type: 'string' }]
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
  