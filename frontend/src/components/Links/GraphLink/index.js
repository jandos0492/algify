import React from "react";
import { NavLink } from "react-router-dom";
import "../Links.css";

const GraphLink = ({ graph, isVisible }) => {
    return isVisible ? (
        <NavLink
            to={`/graph/${graph.id}`}
            className="link"
            style={({ isActive }) => isActive ? { backgroundColor: "#21fd58" } : {}}
        >
            <div className="info">
                <h4 className="no">{graph.no}</h4>
                <h2 className="name">{graph.name}</h2>
            </div>
        </NavLink>
    ) : null
};

export default GraphLink;