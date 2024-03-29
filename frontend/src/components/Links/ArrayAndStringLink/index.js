import React from "react";
import { NavLink } from "react-router-dom";
import "../Links.css";

const ArrayAndStringLink = ({ arrayAndString, isVisible }) => {

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return isVisible ? (
        <NavLink
            to={`/array-and-string/${arrayAndString.id}`}
            className="link"
            style={({ isActive }) => isActive ? { backgroundColor: '#21fd58' } : {}}
            onClick={handleClick}
        >
            <div className="info">
                <h4 className="no">{arrayAndString.no}</h4>
                <h2 className="name">{arrayAndString.name}</h2>
            </div>
        </NavLink>
    ) : null
};


export default ArrayAndStringLink;