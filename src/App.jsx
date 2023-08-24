import { useState } from 'react'
import { Menu } from './components/Menu'
import { Footer } from './components/Footer'
import { Container } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container>
        <Menu />
        <>Bem-Vindo!</>
        <Footer />
      </Container>
    </>
  )
}

export default App
