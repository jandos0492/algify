import React from "react";
import { Link } from "react-router-dom";
import "../Links.css";

const StackLink = ({ stack, isVisible }) => {
    return isVisible ? (
        <Link to={`/stack/${stack.id}`} className="link">
            <div className="info">
                <h4 className="no">{stack.no}</h4>
                <h2 className="name">{stack.name}</h2>
            </div>
        </Link>
    ) : null
};

export default StackLink