import resume from '../images/Resume.pdf'

function Nav() {
    return (
            <nav>
                <ul>
                    <li>
                        <a href="#bio">About Me</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>

                    <li>
                        <a href={resume} download="resume" target="_blank">Resume</a>
                    </li>
                </ul>
            </nav>
    );
}

export default Nav;