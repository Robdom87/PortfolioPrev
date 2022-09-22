import avatar from '../images/avatar.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'react-bootstrap/Image'
import Contact from './contact';


function Header() {
    return (
        <header>
            <section className='profile'>
                <Image className='profilePic' roundedCircle src={avatar} alt="Headshot of person." />
                <h1><strong>Hi, I am Robert Dominguez,</strong><br />an aspiring software engineer.
                    <br />This is my site.</h1>
            </section>
            <Contact />
        </header>
    );
}

export default Header;