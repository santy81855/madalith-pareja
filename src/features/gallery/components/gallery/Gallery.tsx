import styles from './style.module.css'
import { client } from '@/sanity/lib/client'
import * as SanityTypes from '@/@types'
import { urlFor } from '@/sanity/lib/image'
import GridGallery from '../grid-gallery/GridGallery'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const revalidate = 0

type Dimensions = { width: number; height: number }
type ArtWithDims = SanityTypes.Art & { dimensions?: Dimensions }

async function getArt(): Promise<ArtWithDims[]> {
  const query = `
    *[_type == 'art' && defined(image.asset)]{
      ...,
      // Pull image dimensions from the asset metadata for Next/Image sizing
      "dimensions": image.asset->metadata.dimensions
    }
  `
  // Bypass CDN to reflect newly published content immediately
  const freshClient = client.withConfig({ useCdn: false })
  return await freshClient.fetch<ArtWithDims[]>(query)
}

const Gallery = async () => {
  const art = await getArt()

  const images = art.map((doc) => {
    const dims: Dimensions = doc.dimensions ?? { width: 1000, height: 1000 }
    const imageSource = doc.image as unknown as SanityImageSource
    return {
      art: doc,
      src: urlFor(imageSource).url(),
      width: Math.max(1, Math.round(dims.width)),
      height: Math.max(1, Math.round(dims.height)),
      alt: doc.title,
      title: doc.title,
      caption: doc.description,
      category: (doc.category || '').trim(),
      blurDataURL: urlFor(imageSource).width(10).height(10).blur(10).url(),
    }
  })

  return (
    <section className={styles.container}>
      <GridGallery images={images} />
    </section>
  )
}

export default Gallery
