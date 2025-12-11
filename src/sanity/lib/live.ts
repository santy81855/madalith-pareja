import { client } from './client'

type FetchArgs<TParams = Record<string, unknown>> = {
  query: string
  params?: TParams
}

export async function sanityFetch<T = unknown, TParams = Record<string, unknown>>(
  args: FetchArgs<TParams>
): Promise<{ data: T }> {
  let data: T
  if (args.params) {
    data = await client.fetch<T>(args.query, args.params as unknown as Record<string, unknown>)
  } else {
    data = await client.fetch<T>(args.query)
  }
  return { data }
}

export function SanityLive() {
  return null
}
