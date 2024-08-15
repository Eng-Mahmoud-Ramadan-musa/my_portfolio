import MyForm from './Form';
import H2 from './H2';
import Container from './Container'

export default function About() {
  return (
    <Container id="Contact" style={{"flex-direction": "column"}}>
            <H2 title='Contact' />
            <MyForm />
    </Container>
  )
}
