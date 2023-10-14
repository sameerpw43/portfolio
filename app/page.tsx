import About from "./components/About";
import Intro from "./components/Intro";
import Project from "./components/Project";
import Section_divider from "./components/Section_divider";


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
   <Intro/>
   <Section_divider/>
   <About/>
   <Project/>
    </main>
  )
}
