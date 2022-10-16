import "./Navbar.css"
import styled from 'styled-components';

import { Link } from 'react-scroll';
function Navbar()
{
    return <div className="Navbar">
                <ul>
                    <li> <Link activeClass="active" to="home" spy={true} smooth={true} duration={1000}>Home</Link></li>
                    <li><Link activeClass="active" to="skills" spy={true} smooth={true} duration={1000}>Skills</Link></li>
                    <li><Link activeClass="active" to="project" spy={true} smooth={true} duration={1000}>Projects</Link></li>
                    {/* <li><Link activeClass="active" to="certificate" spy={true} smooth={true} duration={1000}>Certifications</Link></li> */}
                    <li><Link activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>Contact</Link></li>
                </ul>
    </div>;
}

export default Navbar;