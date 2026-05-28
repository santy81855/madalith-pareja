import { defineField } from 'sanity'

const art = {
  name: 'art',
  title: 'Art',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
  name: 'category',
  title: 'Category',
  type: 'string',
  options: {
    list: [
      { title: 'Oils', value: 'oils' },
      { title: 'Acrylics', value: 'acrylics' },
      { title: 'Glass', value: 'glass' },
      { title: 'Pencils', value: 'pencils' },
      { title: 'Murals', value: 'murals' },
    ],
  },
}),
    defineField({ name: 'description', title: 'Description', type: 'text' }),
    defineField({ name: 'price', title: 'Price', type: 'number' }),
  ],
}

export default art
