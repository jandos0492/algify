import React from "react";
import { Link } from "react-router-dom";
import "../Links.css";

const ExhaustiveRecursionLink = ({ exhaustiveRecursion, isVisible }) => {
    return isVisible ? (
        <Link to={`/exhaustive-recursion/${exhaustiveRecursion.id}`} className="link">
            <div className="info">
                <h4 className="no">{exhaustiveRecursion.no}</h4>
                <h2 className="name">{exhaustiveRecursion.name}</h2>
            </div>
        </Link>
    ) : null
};

export default ExhaustiveRecursionLink;