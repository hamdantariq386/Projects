import React, {useState} from "react";
import "./Navbar.css"
import MenuList from "../Navbar/Menu-list"
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    
    const menuList = MenuList.map(({url, title}, index)  => {
        return (
        <li key={index}>
            <NavLink exact = 'true' to={url} activeclassname="active">{title}</NavLink>
        </li>
        )
    });
    const handleClick = () => {
        setClicked(!clicked);
    }
    return (
        <nav>
            <div className="logo">
                Insights<font>pilot</font>
            </div>
            <div className="menu-icon">
                <span onClick={handleClick}>
                    {clicked ? <IoClose className="ioclose"/>
                    : <FaBars className="fabars"/>}
                    
                </span>
            </div>
            <ul className={clicked ? "menu-list" : "menu-list close"}>
                {menuList}
            </ul>
        </nav>
    )
}

export default Navbar;