import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import './styles.scss'

const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <div>
                    <h1><span>FV</span> Films</h1>
                </div>
                <div style={{display:"flex", alignItems:"center"}}>
                    <ul className="menu-list" style={{display:"flex"}}>
                        <li>
                            <a href="">Most Popular</a>
                        </li>
                        <li>
                            <a href="">Top Rates</a>
                        </li>
                    </ul>
                     <div className="find">
                        <input type="text" placeholder="Buscar..." />
                        <BiSearchAlt2 style={{marginLeft:"16px"}} size={28}/>
                    </div>
                </div>
           
            </nav>
        </header>
    )
}

export default Header;