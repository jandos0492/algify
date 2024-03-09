import React from "react";
import { NavLink } from "react-router-dom";
import "../Links.css";

const IntroductionLink = ({ introduction, isVisible }) => {
    return isVisible ? (
        <NavLink
            to={`/introduction/${introduction.id}`}
            className="link"
            style={({ isActive }) => isActive ? { backgroundColor: "#21fd58" } : {}}
        >
            <div className="info">
                <h4 className="no">{introduction.no}</h4>
                <h2 className="name">{introduction.name}</h2>
            </div>
        </NavLink>
    ) : null;
};

export default IntroductionLink;
