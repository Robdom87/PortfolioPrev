import fitCal from '../images/fitCal.jpeg'
import portfolio from '../images/portfolio.png'
import employee_db_cms from '../images/employee_db.png'
import ecommerce from '../images/ecommerce.png'
import qjtd from '../images/qjtd.png'
import ttt from '../images/ttt.png'

let projectList = [
    {
        href: "https://fitcalxxii.herokuapp.com/",
        src: fitCal,
        alt: "Website landing page titled FitCal.",
        title: "FitCal",
        tech: "Handlebars, Node",
        description: "FitCal is an application to provide starting point for anyone looking to improve their consumption and health with exercise data tracking and data visualization."
    },
    {
        href: "https://robdom87.github.io/",
        src: portfolio,
        alt: "Website with an about me and work section.",
        title: "Portfolio",
        tech: "REACT, CSS",
        description: "Inception."
    },
    {
        href: "https://github.com/Robdom87/employee_db_cms",
        src: employee_db_cms,
        alt: "Image of code in a terminal.",
        title: "employee_db_cms",
        tech: "Javascript, MySQL",
        description: "employee_db_cms is a content management system that provides simplified options to view, create, update, delete,and interact with your own employee database via the terminal."
    },
    {
        href: "https://github.com/Robdom87/e-commerce_routing",
        src: ecommerce,
        alt: "Insomnia page containing e-commerce routes.",
        title: "e-commerce_routing",
        tech: "Sequelize, API routes",
        description: "Routing to create, read, update, and delete data within your database on MySQL via URL requests."
    },
    {
        href: "http://the-talking-tech.herokuapp.com/",
        src: ttt,
        alt: "The Talking Tech Blog Dashboard",
        title: "the-talking-tech",
        tech: "Handlebars, Express",
        description: "Blog to discuss all things tech with full posting and commenting functionalities for registered accounts."
    },
    {
        href: "https://qjtd.herokuapp.com/",
        src: qjtd,
        alt: "Quick Jot This Down interface.",
        title: "quick-jot-this-down",
        tech: "Javascript, Express",
        description: "Simple note taking application with data persistence."
    }

];

export default projectList;