import React from "react";
import { NavLink } from "react-router-dom";
import "../Links.css";

const MixedRecallLink = ({ mixedRecall, isVisible }) => {
    const { no, name } = mixedRecall;
    return isVisible ? (
        <NavLink
            to={`/mixed-recall/${mixedRecall.id}`}
            className="link"
            style={({ isActive }) => isActive ? { backgroundColor: "#21fd58" } : {}}
        >
            <div className="info">
                <h4 className="no">{no}</h4>
                <h2 className="name">{name}</h2>
            </div>
        </NavLink>
    ) : null
};

export default MixedRecallLink;