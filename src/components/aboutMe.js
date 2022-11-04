import Button from 'react-bootstrap/Button';
import resume from '../images/Resume.pdf'


function AboutMe() {
    return (
        <section className="aboutMe">
            <h2>"If it illicits fear, it must be done." - Anonymous</h2>
            <p>
                I am a recent grad whose itch to learn new things pushed him into an entirely new career trajectory, software development.
                I am always excited to take on a new challenge and coming from an accounting heavy background, I am not afraid to tackle big data sets.  
            </p>
            <a href={resume} download="resume" target="_blank">
                <Button variant="outline-secondary">Download Resume</Button>
            </a>
        </section>
    );
}

export default AboutMe;