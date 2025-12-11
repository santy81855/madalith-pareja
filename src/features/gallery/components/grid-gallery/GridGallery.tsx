"use client"
import * as SanityTypes from '@/@types'
import Image from 'next/image'
import styles from './style.module.css'
import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { GALLERY_CATEGORIES } from '../../config'

type GridGalleryProps = {
  images: {
    art: SanityTypes.Art
    src: string
    width: number
    height: number
    alt: string
    caption: string
    category: string
    blurDataURL: string
    title: string
  }[]
}

type ImageItem = GridGalleryProps['images'][number]

type ArtPageProps = {
  images: ImageItem[][]
  numColumns: number
  setItemHovered: React.Dispatch<React.SetStateAction<number[]>>
  itemHovered: number[]
  loadedImages: { [url: string]: boolean }
  handleImageLoad: (url: string) => void
}

const ArtPage = ({ images, numColumns, setItemHovered, itemHovered, loadedImages, handleImageLoad }: ArtPageProps) => {
  return (
    <section
      className={styles.masonGrid as string}
      style={{ display: 'grid', gridTemplateColumns: `repeat(${numColumns}, 1fr)`, gap: '10px' }}
    >
      {images.map((column, i) => (
        <section className={styles.gridColumn} key={i}>
          {column.map((image, j) => (
            <motion.div
              key={`image-${i}-${j}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              onMouseEnter={() => setItemHovered([i, j])}
              onMouseLeave={() => setItemHovered([-1, -1])}
              className={`${itemHovered[0] === i && itemHovered[1] === j ? styles.hovered : styles.notHovered} ${styles.imageWrapper} ${loadedImages[image.src] ? styles.loaded : styles.notLoaded}`}
            >
              <div className={styles.caption + ' ' + (itemHovered[0] === i && itemHovered[1] === j ? styles.captionHovered : '')}>
                {image.title}
              </div>
              <Image
                src={image.src}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                width={Math.max(1, Math.round(image.width / 5))}
                height={Math.max(1, Math.round(image.height / 5))}
                alt={image.alt}
                placeholder="blur"
                blurDataURL={image.blurDataURL}
                quality={40}
                onLoad={() => handleImageLoad(image.src)}
              />
            </motion.div>
          ))}
        </section>
      ))}
    </section>
  )
}

const distributeImages = (images: ImageItem[], numColumns: number) => {
  const columns: ImageItem[][] = Array.from({ length: numColumns }, () => [])
  const columnHeights = Array(numColumns).fill(0)

  images.forEach((image) => {
    const minColumnIndex = columnHeights.indexOf(Math.min(...columnHeights))
    columns[minColumnIndex].push(image)
    columnHeights[minColumnIndex] += image.height / image.width
  })

  return columns
}

const GridGallery = ({ images }: GridGalleryProps) => {
  const [numColumns, setNumColumns] = useState(3)
  const [itemHovered, setItemHovered] = useState([-1, -1])
  const [loadedImages, setLoadedImages] = useState<{ [url: string]: boolean }>({})
  const ALL = 'All'
  const [curCategory, setCurCategory] = useState<string>(ALL)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) setNumColumns(3)
      else if (window.innerWidth < 2000) setNumColumns(4)
      else setNumColumns(5)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const normalize = (s: string) => (s || '').trim().toLowerCase()

  const columnsByCategory = useMemo(() => {
    const result: Record<string, ImageItem[][]> = {}
    // All images
    result[ALL] = distributeImages(images, numColumns)
    for (const category of GALLERY_CATEGORIES) {
      const filtered = images.filter((img) => normalize(img.category) === normalize(category))
      result[category] = distributeImages(filtered, numColumns)
    }
    return result
  }, [images, numColumns])

  const handleImageLoad = (url: string) => {
    setLoadedImages((prev) => ({ ...prev, [url]: true }))
  }

  const formatLabel = (s: string) => s.slice(0,1).toUpperCase() + s.slice(1)

  return (
    <section className={styles.container}>
      <div className={styles.buttonContainer} role="tablist" aria-label="Gallery categories">
        {[ALL, ...GALLERY_CATEGORIES].map((c) => {
          const active = curCategory === c
          return (
            <button
              key={c}
              role="tab"
              aria-selected={active}
              className={`${styles.tabButton} ${active ? styles.tabButtonActive : ''}`}
              onClick={() => {
                setCurCategory(c)
                setItemHovered([-1, -1])
              }}
            >
              {c === ALL ? 'All' : formatLabel(c)}
            </button>
          )
        })}
      </div>

      <section className={styles.imageContainer}>
        <ArtPage
          images={columnsByCategory[curCategory] || Array.from({ length: numColumns }, () => [])}
          numColumns={numColumns}
          setItemHovered={setItemHovered}
          itemHovered={itemHovered}
          loadedImages={loadedImages}
          handleImageLoad={handleImageLoad}
        />
      </section>
    </section>
  )
}

export default GridGallery
