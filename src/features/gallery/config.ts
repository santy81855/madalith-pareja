export const GALLERY_CATEGORIES = [
  'category1',
  'category2',
  'category3',
] as const

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number]

