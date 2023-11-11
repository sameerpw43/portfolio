
import About from "./components/About";
import Experience from "./components/Experience";
import Intro from "./components/Intro";

import Projects from "./components/Projects";
import Section_divider from "./components/Section_divider";
import Skills from "./components/Skills";
import Contact from "./components/contact";


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
   <Intro/>
   <Section_divider/>
   <About/>
  <Projects/>
  <Skills/>
  <Experience/>
<Contact/>
    </main>
  )
}
