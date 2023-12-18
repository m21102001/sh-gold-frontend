import { AboutThat } from '@/components'
import { Footer, Navbar } from '@/layout'

const About = () => {
    return (
        <div style={{background:"var(--darkblue-color)"}}>
            <Navbar />
            <AboutThat />
            <Footer />
        </div>
    )
}

export default About