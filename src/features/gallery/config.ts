export const GALLERY_CATEGORIES = [
  'oils',
  'acrylics',
  'glass',
] as const

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number]
