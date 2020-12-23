import './Welcome.css'
import Logo from '../../assets/images/logo_2.png'
import About from './About'
import Container from 'react-bootstrap/Container'

const Welcome = ({element}) => {
    return (
        <Container fluid>
            <main>
                <section className='welcome'>
                    <div ref={element}>
                        <img src={Logo} alt='logo' className='welcome--logo' />
                        <h1>Välkommen!</h1>
                        <h4>Welcome! We are so happy to have you here.</h4>
                    </div>
                </section>
                <About />
            </main>
        </Container>
    )
}

export default Welcome