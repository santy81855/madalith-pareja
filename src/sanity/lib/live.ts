import { client } from './client'

type FetchArgs<TParams = Record<string, unknown>> = {
  query: string
  params?: TParams
}

export async function sanityFetch<T = unknown, TParams = Record<string, unknown>>(
  args: FetchArgs<TParams>
): Promise<{ data: T }> {
  const data = await client.fetch<T>(args.query, args.params)
  return { data }
}

export function SanityLive() {
  return null
}
