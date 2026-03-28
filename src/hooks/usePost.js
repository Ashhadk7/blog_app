import { posts } from '../data/posts'

export function usePost(id) {
  const post = posts.find((p) => p.id === id) ?? null
  return { post }
}
