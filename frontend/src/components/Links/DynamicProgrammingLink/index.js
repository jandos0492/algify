import React from "react";
import { Link } from "react-router-dom";
import "../Links.css";

const DynamicProgrammingLink = ({ dynamicProgramming, isVisible }) => {
    return isVisible ? (
        <Link to={`/dynamic-programming/${dynamicProgramming.id}`} className="link">
            <div className="info">
                <h4 className="no">{dynamicProgramming.no}</h4>
                <h2 className="name">{dynamicProgramming.name}</h2>
            </div>
        </Link>
    ) : null
};

export default DynamicProgrammingLink;