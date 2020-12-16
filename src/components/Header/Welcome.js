import React from 'react'

import './Welcome.css'
import Logo from '../../assets/images/logo_2.png'
import About from './About'

const Welcome = ({element}) => {
    return (
            <main>
                <section className='welcome'>
                    <div ref={element}>
                        <img src={Logo} alt='logo' className='welcome--logo' />
                        <h1>Välkommen!</h1>
                        <h4>Welcome! We are so happy to have you here.</h4>
                    </div>
                </section>
                <About />
                <About />
                <About />
            </main>
    )
}

export default Welcome