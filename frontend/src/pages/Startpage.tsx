import About from "../components/About"
import CodeSection from "../components/CodeSection"
import Hero from "../components/Hero"

const Startpage = () => {
  return (
	<section className="mx-4">
		<Hero />
		<About />
		<CodeSection />
	</section>
  )
}
export default Startpage