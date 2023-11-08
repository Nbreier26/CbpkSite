export default{
    name: 'laboratorios',
    type: 'document',
    title: 'Laboratorios',
    fields: [
      {
        name: 'titulo',
        type: 'string',
        title: 'Título'
      },
      {
        name: 'descricao',
        type: 'text',
        title: 'Descrição'
      },
      {
        name: 'imagem_grande',
        type: 'image',
        title: 'Imagem Grande'
      },
      {
        name: 'imagens_pequenas',
        type: 'array',
        title: 'Imagens Pequenas',
        of: [
          {
            type: 'image',
            title: 'Imagem Pequena'
          }
        ]
      }
    ]
  }
  