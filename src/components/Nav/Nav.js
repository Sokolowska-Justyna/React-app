import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = ({ data }) => (
    <header>
        <nav className="navigation">
            <ul className="navigation__ul">
                {
                    data.map((item) => {
                        return (<li className="navigation__li" key={item.id}><Link to={`/${item.id}`}>{item.label}</Link></li>)
                    })
                }
            </ul>
        </nav>
    </header>
)

export default Nav;