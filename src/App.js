import useSticky from "./hooks/useSticky.js"
import Welcome from "./components/Header/Welcome"
import Navbar from "./components/Header/Navbar"
import Footer from "./components/Footer/Footer"
import Container from 'react-bootstrap/Container'

function App() {
  const { isSticky, element } = useSticky()
  return (
    <Container fluid>
      <Navbar sticky={isSticky}/>
      <Welcome element={element}/>
      <Footer element={element}/>
    </Container>
  )
}

export default App;
