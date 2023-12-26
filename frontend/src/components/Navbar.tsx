import { Link } from "react-router-dom"
//FIXME fixa mobil anpassning
const Navbar = () => {
  return (
	<nav className="hidden md:block bg-white/75 fixed top-0 border-purple border-b-2 w-full py-2 z-10">
		<ul className="flex justify-around items-center">
			<li className="text-purple text-lg font-semibold">{'<' + ' Cattis ' + '/>'}</li>
			<div className="flex justify-between w-fit gap-10 text-sm font-light text-purple">
				<Link to=''>Om mig</Link>
				<Link to=''>Erfarenhet</Link>
				<Link to=''>Kontakta mig</Link>
			</div>
		</ul>
	</nav>
  )
}
export default Navbar