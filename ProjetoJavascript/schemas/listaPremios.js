export default {
    name: 'listaPremios',
    type: 'document',
    title: 'Lista de Prêmios',
    fields: [
      {
        name: 'ativo',
        type: 'boolean',
        title: 'Ativo'
      },
      {
        name: 'imagem',
        type: 'image',
        title: 'Imagem'
      },
      {
        name: 'descricao',
        type: 'string',
        title: 'Descrição'
      }
    ]
  }
  