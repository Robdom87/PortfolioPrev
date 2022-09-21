function Header() {
    return (
        <header>
        <section>
            <img src="./assets/avatar.jpg" alt="Headshot of person."/>      
            <h1>Robert Dominguez</h1>
        </section>
        <nav>
            <ul>
                <li>
                    <a href="#bio">Bio</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                <li>
                    <a href="./assets/Resume.pdf" download="resume" target="_blank">Resume</a>
                </li>
            </ul>
        </nav>
    </header>
    );
  }

  export default Header;