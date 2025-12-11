import styles from './style.module.css'
import { client } from '@/sanity/lib/client'
import * as SanityTypes from '@/@types'
import { urlFor } from '@/sanity/lib/image'
import GridGallery from '../grid-gallery/GridGallery'

export const revalidate = 60

async function getArt() {
  const query = `
    *[_type == 'art' && defined(image.asset)]{
      ...,
      // Pull image dimensions from the asset metadata for Next/Image sizing
      "dimensions": image.asset->metadata.dimensions
    }
  `
  return await client.fetch(query)
}

const Gallery = async () => {
  const art: SanityTypes.Art[] = await getArt()

  const images = art.map((art: SanityTypes.Art) => {
    const dims = (art as any).dimensions || { width: 1000, height: 1000 }
    return {
      art,
      src: urlFor((art as any).image).url(),
      width: Math.max(1, Math.round(dims.width || 1000)),
      height: Math.max(1, Math.round(dims.height || 1000)),
      alt: (art as any).title,
      title: (art as any).title,
      caption: (art as any).description,
      category: (art as any).category,
      blurDataURL: urlFor((art as any).image).width(10).height(10).blur(10).url(),
    }
  })

  return (
    <section className={styles.container}>
      <GridGallery images={images} />
    </section>
  )
}

export default Gallery
