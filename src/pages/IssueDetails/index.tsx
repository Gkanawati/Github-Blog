import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { Link, useParams } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import {
  ArrowSquareOut,
  Calendar,
  CaretLeft,
  ChatsCircle,
  GithubLogo,
} from 'phosphor-react'
import Markdown from 'react-markdown'
import { Header } from '../../components/Header'
import { IssuePost, PostsContext } from '../../contexts/PostsContext'
import {
  Container,
  DetailsContainer,
  HeaderCard,
  ProfileCard,
  ProfileInfo,
} from './styles'

export function IssueDetails() {
  const params = useParams<{ issueNumber: string }>()

  const posts = useContextSelector(PostsContext, (context) => context.posts)

  const [selectedPost, setSelectedPost] = useState<IssuePost>({} as IssuePost)

  function filterSelectedPost(IssueNumber: number) {
    const post = posts.filter((post: IssuePost) => post.number === IssueNumber)
    setSelectedPost(post[0]);

    if (post.length === 0) {
      window.location.href = '/'
    }
  }

  useEffect(() => {
    filterSelectedPost(Number(params.issueNumber))
  }, [])

  return (
    <>
      <Header />

      <Container>
        <ProfileCard>
          <ProfileInfo>
            <HeaderCard>
              <Link to="/">
                <CaretLeft size={14} />
                VOLTAR
              </Link>

              <Link to={selectedPost.html_url} target="_blank">
                VER NO GITHUB
                <ArrowSquareOut size={14} weight="fill" />
              </Link>
            </HeaderCard>

            <h2>{selectedPost.title}</h2>

            <ul>
              <li>
                <GithubLogo size={24} weight="fill" />
                {selectedPost.user?.login}
              </li>
              <li>
                <Calendar size={24} weight="fill" />
                {dayjs(selectedPost.created_at).fromNow()}
              </li>
              <li>
                <ChatsCircle size={24} weight="fill" />
                {selectedPost.comments} Comentários
              </li>
            </ul>
          </ProfileInfo>
        </ProfileCard>

        <DetailsContainer>
          <Markdown>{selectedPost.body}</Markdown>
        </DetailsContainer>
      </Container>
    </>
  )
}
