import logo from "../assets/img/logo.png"
import moon from "../assets/img/moon.png"
import MobileMenu from "./MobileMenu";
const Navbar = () => {
    return (
        <nav className="w-full fixed top-0 bg-white">
            <div className="container mx-auto py-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img className="w-8" src={logo} alt="" />
                    <span className="text-2xl font-bold text-indigo-900">Portwind.</span>
                </div>
                <ul className="hidden md:flex space-x-10 font-bold text-sm uppercase">
                    <li className="hover:text-gray-500">
                        <a href="#">homepage</a>
                    </li>
                    <li className="hover:text-gray-500">
                        <a href="#">about me</a>
                    </li>
                    <li className="hover:text-gray-500">
                        <a href="#">services</a>
                    </li>
                    <li className="hover:text-gray-500">
                        <a href="#">works</a>
                    </li>
                    <li className="hover:text-gray-500">
                        <a href="#">contact</a>
                    </li>
                </ul>
                <img className="hidden md:block w-5 cursor-pointer" src={moon} alt="" />
                <MobileMenu />
            </div>
        </nav>
    )
}
export default Navbar;