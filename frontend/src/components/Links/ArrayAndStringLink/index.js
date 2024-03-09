import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Links.css";

const ArrayAndStringLink = ({ arrayAndString, isVisible }) => {
    return isVisible ? (
        <NavLink
            to={`/array-and-string/${arrayAndString.id}`}
            className="link"
            style={({ isActive }) => isActive ? { backgroundColor: '#21fd58' } : {}}>
            <div className="info">
                <h4 className="no">{arrayAndString.no}</h4>
                <h2 className="name">{arrayAndString.name}</h2>
            </div>
        </NavLink>
    ) : null
};


export default ArrayAndStringLink;