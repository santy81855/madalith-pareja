import styles from './style.module.css'
import { client } from '@/sanity/lib/client'
import * as SanityTypes from '@/@types'
import { urlFor } from '@/sanity/lib/image'
import { getImageDimensions } from '@sanity/asset-utils'
import GridGallery from '../grid-gallery/GridGallery'

export const revalidate = 60

async function getArt() {
  const query = `*[_type == 'art' && defined(image)]`
  return await client.fetch(query)
}

const Gallery = async () => {
  const art: SanityTypes.Art[] = await getArt()

  const images = art.map((art: SanityTypes.Art) => {
    const dims = getImageDimensions(art.image as any)
    return {
      art,
      src: urlFor(art.image as any).url(),
      width: dims.width,
      height: dims.height,
      alt: art.title,
      title: art.title,
      caption: art.description,
      category: art.category,
      blurDataURL: urlFor(art.image as any).width(10).height(10).blur(10).url(),
    }
  })

  return (
    <section className={styles.container}>
      <GridGallery images={images} />
    </section>
  )
}

export default Gallery

