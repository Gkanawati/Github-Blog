import { useEffect, useState, useCallback } from 'react'
import { api } from '../services/api'
import { createContext } from 'use-context-selector'

interface PostsProviderProps {
  children: React.ReactNode
}

export interface IssuePost {
  url: string
  repository_url: string
  labels_url: string
  comments_url: string
  events_url: string
  html_url: string
  id: number
  node_id: string
  number: number
  title: string
  user: User
  labels: any[]
  state: string
  locked: boolean
  assignee: any
  assignees: any[]
  milestone: any
  comments: number
  created_at: string
  updated_at: string
  closed_at: any
  author_association: string
  active_lock_reason: any
  body: string
  reactions: Reactions
  timeline_url: string
  performed_via_github_app: any
  state_reason: string
}

export interface User {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

export interface Reactions {
  url: string
  total_count: number
  '+1': number
  '-1': number
  laugh: number
  hooray: number
  confused: number
  heart: number
  rocket: number
  eyes: number
}

export interface PostsContextData {
  posts: IssuePost[]
  fetchPosts: (query?: string) => Promise<void>
  getPostByNumber: (number: number) => Promise<IssuePost>
}

export const PostsContext = createContext<PostsContextData>(
  {} as PostsContextData,
)

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<IssuePost[]>([])

  const fetchPosts = useCallback(async (query?: string) => {
    try {
      // https://api.github.com/search/issues?q=filtro%20repo:Gkanawati/Github-Blog
      const response = await api.get(
        `/search/issues?q=${query ? `${query}` : ''} repo:Gkanawati/Github-Blog`,
      )
      const data = response.data
      setPosts(data.items)
    } catch (error) {
      console.log(error)
      if ((error as any).response.status === 403) {
        alert('Limite de requisições atingido, tente novamente mais tarde')
      } else {
        alert('Erro ao buscar posts')
      }
    }
  }, [])

  const getPostByNumber = useCallback(async (number: number) => {
    try {
      const response = await api.get(
        `/repos/Gkanawati/Github-Blog/issues/${number}`,
      )
      const data = response.data
      console.log(data)
      return data
    } catch (error) {
      console.error(error)
    }
  }, [])

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <PostsContext.Provider value={{ posts, fetchPosts, getPostByNumber }}>
      {children}
    </PostsContext.Provider>
  )
}
