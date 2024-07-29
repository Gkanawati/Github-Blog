import { Container } from './styles'
import Logo from '../../assets/logo.svg'

export function Header() {
  return (
    <Container>
      <img src={Logo} alt="Github Blog Logo" />
    </Container>
  )
}
