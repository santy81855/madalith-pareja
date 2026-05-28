export const GALLERY_CATEGORIES = [
  'oils',
  'acrylics',
  'glass',
  'pencils',
  'murals',
] as const

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number]
