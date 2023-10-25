
import "./../../styles/index.css";

import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <nav>
            <ul>
                <span className='logo'>Alexsandria</span>
                <nav>
                    <ul className='nav'>
                        <li className='cat-button'>
                            <NavLink to="/categories" className='cat-button'>
                                Найти
                            </NavLink>
                        </li>
                        <li className='cat-button'>
                            <NavLink to="/" className='cat-button'>
                                Home
                            </NavLink>

                        </li>
                        <li className='cat-button'>
                            <NavLink to="/info" className='cat-button'>
                                О нас
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </ul>
        </nav>
    );
}
export default Navbar;