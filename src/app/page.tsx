import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { About } from "@/components/home/about";
import { Contact } from "@/components/home/contact";
import { Projects } from "@/components/home/projects";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
