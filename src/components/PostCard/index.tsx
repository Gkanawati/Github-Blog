import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Container, HeaderCard } from './styles'
import { IssuePost } from '../../contexts/PostsContext'
import { Link } from 'react-router-dom'

dayjs.locale('pt-br')
dayjs.extend(relativeTime)

interface PostCardProps {
  issue: IssuePost
}

export function PostCard({ issue }: PostCardProps) {
  return (
    <Container>
      <Link to={`/issue/${issue.number}`}>
        <HeaderCard>
          <h2>{issue.title}</h2>
          <span>{dayjs(issue.created_at).fromNow()}</span>
        </HeaderCard>

        <p>{issue.body}</p>
      </Link>
    </Container>
  )
}
