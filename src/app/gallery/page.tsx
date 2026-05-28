import { Gallery } from '@/features/gallery'

export const metadata = {
  title: 'Gallery',
}

export const revalidate = 0
export const dynamic = 'force-dynamic'

export default function Page() {
  return <Gallery />
}

