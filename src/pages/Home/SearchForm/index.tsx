import { useForm } from 'react-hook-form'
import { Container, FormContainer } from './styles'
import { useContextSelector } from 'use-context-selector'
import { PostsContext } from '../../../contexts/PostsContext'

export function SearchForm() {
  const { posts, fetchPosts } = useContextSelector(
    PostsContext,
    (context) => context
  )

  const { register, handleSubmit } = useForm()

  function handleSearchIssues(data: any) {
    fetchPosts(data.query)
  }

  return (
    <Container>
      <div>
        <h2>Publicações</h2>

        <span>{posts.length} publicações</span>
      </div>

      <FormContainer action="" onSubmit={handleSubmit(handleSearchIssues)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query', { required: false })}
        />

        <button type="submit">Buscar</button>
      </FormContainer>
    </Container>
  )
}
