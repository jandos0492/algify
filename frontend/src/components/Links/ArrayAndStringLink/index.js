import React from "react";
import { Link } from "react-router-dom";
import "../Links.css";

const ArrayAndStringLink = ({ arrayAndString, isVisible }) => {
    return isVisible ? (
        <Link to={`/${arrayAndString.name}/${arrayAndString.id}`} className="link">
            <div className="info">
                <h4 className="no">{arrayAndString.no}</h4>
                <h2 className="name">{arrayAndString.name}</h2>
            </div>
        </Link>
    ) : null
};


export default ArrayAndStringLink;