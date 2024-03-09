import React from "react";
import { Link } from "react-router-dom";
import "../Links.css";

const GraphLink = ({ graph, isVisible }) => {
    return isVisible ? (
        <Link to={`/graph/${graph.id}`} className="link">
            <div className="info">
                <h4 className="no">{graph.no}</h4>
                <h2 className="name">{graph.name}</h2>
            </div>
        </Link>
    ) : null
};

export default GraphLink;