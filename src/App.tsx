
import {
    AboutMe,
    Achievements,
    ByHobby,
    Education,
    Experience,
    Footer,
    Main,
    Projects,
    Resources,
    Skills,
} from './components';


function App() {

  return (
    <>
      <Main/>
      <Resources />
      <AboutMe />
      <hr className="mt-12 mb-4"/>
      <Skills />
      <hr className="mt-12 mb-4"/>
      <Experience />
      <hr className="mt-12 mb-4"/>
      <Projects />
      <hr className="mt-12 mb-4"/>
      <ByHobby />
      <hr className="mt-12 mb-4"/>
      <Achievements />
      <Education />
      <Footer />
    </>
  )
}

export default App
