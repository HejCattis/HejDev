import About from "../components/About"
import CodeSection from "../components/CodeSection"
import Experience from "../components/Experience"
import Hero from "../components/Hero"

const Startpage = () => {
  return (
	<section className="mx-4 md:mx-10">
		<Hero />
		<About />
		<CodeSection />
		<Experience />
	</section>
  )
}
export default Startpage