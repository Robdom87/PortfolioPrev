import Header from './components/header';
import Banner from './components/banner';
import AboutMe from './components/aboutMe';
import ProjectCont from './components/projectCont';
import Contact from './components/contact';
import './App.css';

function App() {
  return (
    <main>
      <Header />
      <Banner />
      <AboutMe/>
      <ProjectCont/>
      <Contact/>
    </main>
  );
}

export default App;
