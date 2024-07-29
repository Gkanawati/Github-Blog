import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import {
  Container,
  HeaderCard,
  PostsContainer,
  ProfileCard,
  ProfileInfo,
} from './styles'
import { ArrowSquareOut, Buildings, GithubLogo, Users } from 'phosphor-react'
import { api } from '../../services/api'
import { Link } from 'react-router-dom'
import { SearchForm } from './SearchForm'
import { PostCard } from '../../components/PostCard'
import { IssuePost, PostsContext } from '../../contexts/PostsContext'
import { useContextSelector } from 'use-context-selector'

interface UserInfoProps {
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
  name: string
  company: any
  blog: string
  location: string
  email: any
  hireable: any
  bio: string
  twitter_username: any
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

export function Home() {
  const [userInfo, setUserInfo] = useState<UserInfoProps>({} as UserInfoProps)
  const { posts, fetchPosts } = useContextSelector(
    PostsContext,
    (context) => context,
  )

  async function getGithubProfileInfo() {
    try {
      const response = await api.get('/users/gkanawati')
      const data = response.data
      setUserInfo(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getGithubProfileInfo()
    fetchPosts()
  }, [])

  return (
    <>
      <Header />

      <Container>
        <ProfileCard>
          <Link to={userInfo.html_url} target="_blank">
            <img src={userInfo.avatar_url} alt="Foto de Perfil" />
          </Link>

          <ProfileInfo>
            <HeaderCard>
              <h2>{userInfo.name}</h2>

              <Link to={userInfo.html_url} target="_blank">
                GITHUB
                <ArrowSquareOut size={14} weight="fill" />
              </Link>
            </HeaderCard>

            <p>{userInfo.bio}</p>

            <ul>
              <li>
                <GithubLogo size={24} weight="fill" />
                {userInfo.login}
              </li>
              <li>
                <Buildings size={24} weight="fill" />
                {userInfo.company || 'Sem empresa'}
              </li>
              <li>
                <Users size={24} weight="fill" />
                {userInfo.followers} Seguidores
              </li>
            </ul>
          </ProfileInfo>
        </ProfileCard>

        <SearchForm />

        <PostsContainer>
          {posts.length > 0 ? (
            posts.map((post: IssuePost) => (
              <PostCard key={post.id} issue={post} />
            ))
          ) : (
            <h3>Nenhum post encontrado</h3>
          )}
        </PostsContainer>
      </Container>
    </>
  )
}
