import React from "react";
import { NavLink } from "react-router-dom";
import "../Links.css";

const StackLink = ({ stack, isVisible }) => {
    return isVisible ? (
        <NavLink
            to={`/stack/${stack.id}`}
            className="link"
            style={({ isActive }) => isActive ? { backgroundColor: "#21fd58" } : {}}
        >
            <div className="info">
                <h4 className="no">{stack.no}</h4>
                <h2 className="name">{stack.name}</h2>
            </div>
        </NavLink>
    ) : null

};

export default StackLink