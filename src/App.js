import Header from './components/header';
import AboutMe from './components/aboutMe';
import ProjectCont from './components/projectCont';
import Footer from './components/footer';

import './CSS/App.css';
import './CSS/style.css';

function App() {
  return (
    <main>
      <Header />
      <aside>
        <AboutMe />   
        <ProjectCont />
        <Footer/>
      </aside>
    </main>
  );
}

export default App;
