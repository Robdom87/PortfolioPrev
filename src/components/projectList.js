import fitCal from '../images/fitCal.jpeg'
import portfolio from '../images/portfolio.png'
import employee_db_cms from '../images/employee_db_cms.png'
import ecommerce from '../images/ecommerce.png'
import qjtd from '../images/qjtd.png'
import fcv2 from '../images/fitCalv2.png'

let projectList = [
    {
        href: "https://robdom87.github.io/FitCal/",
        src: fitCal,
        alt: "Website landing page titled FitCal.",
        title: "FitCal",
        tech: "Javascript, HTML",
        description: "FitCal is a nutrition and exercise app with a simple and clean interface to assist user with daily logs of nutritional values, BMI index and exercise routine."
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
        tech: "Javascript, API routes",
        description: "Routing to create, read, update, and delete data within your database on MySQL via URL requests."
    },
    {
        href: "https://qjtd.herokuapp.com/",
        src: qjtd,
        alt: "Quick Jot This Down interface.",
        title: "quick-jot-this-down",
        tech: "Javascript, Express",
        description: "Simple note taking application with data persistance."
    },
    {
        href: "https://fcv2.herokuapp.com/",
        src: fcv2,
        alt: "logo of fitcal v2",
        title: "FitCal v2",
        tech: "Javascript, MySQL, Express",
        description: "***In Development*** Continuation of FitCal with new features and a database."
    }
];

export default projectList;