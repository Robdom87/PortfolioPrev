import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

function Contact() {
    return (
        <section className="contact">
            <a href="mailto:dominguezr.marq@gmail.com"><MdMail /></a>
            <a href="https://github.com/Robdom87"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/robert-dominguez-marq/"><FaLinkedin /></a>
        </section>
    );
}

export default Contact;