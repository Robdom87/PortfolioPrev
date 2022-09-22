import Button from 'react-bootstrap/Button';


function AboutMe() {
    return (
        <section className="aboutMe">
            <h2>"If it illicits fear, it must be done." - Anonymous</h2>
            <p>
                Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate
                lorem neque cubilia ac in adipiscing in curae lobortis tortor primis integer massa adipiscing
                id nisi accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna.
                Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque cubilia.
            </p>
            <Button variant="outline-secondary">Download Resume</Button>
        </section>
    );
}

export default AboutMe;