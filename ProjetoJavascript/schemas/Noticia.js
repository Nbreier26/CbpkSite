export default {
  name: 'noticia',
  type: 'document',
  title: 'Notícia', // Título do documento
  fields: [
    {
      name: 'ativo',
      type: 'boolean',
      title: 'Ativo'
    },
    {
      name: 'titulo',
      type: 'string',
      title: 'Título'
    },
    {
      name: 'subtitulo',
      type: 'string',
      title: 'Subtítulo'
    },
    {
      name: 'conteudo',
      type: 'text',
      title: 'Conteúdo'
    },
    {
      name: 'imagem',
      type: 'image',
      title: 'Imagem'
    },
    {
      name: 'imagemMobile',
      type: 'image',
      title: 'Imagem Mobile'
    },
    {
      name: 'dataPublicacao',
      type: 'date',
      title: 'Data de Publicação'
    }
  ]
}
