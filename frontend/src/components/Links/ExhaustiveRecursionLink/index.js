import React from "react";
import { NavLink } from "react-router-dom";
import "../Links.css";

const ExhaustiveRecursionLink = ({ exhaustiveRecursion, isVisible }) => {
    return isVisible ? (
        <NavLink
            to={`/exhaustive-recursion/${exhaustiveRecursion.id}`}
            className="link"
            style={({ isActive }) => isActive ? { backgroundColor: "#21fd58" } : {}}
        >
            <div className="info">
                <h4 className="no">{exhaustiveRecursion.no}</h4>
                <h2 className="name">{exhaustiveRecursion.name}</h2>
            </div>
        </NavLink>
    ) : null
};

export default ExhaustiveRecursionLink;