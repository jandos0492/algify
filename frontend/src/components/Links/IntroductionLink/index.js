import React from "react";
import { Link } from "react-router-dom";
import "../Links.css";

const IntroductionLink = ({ introduction, isVisible }) => {
    return isVisible ? (
        <Link to={`/introduction/${introduction.id}`} className="link">
            <div className="info">
                <h4 className="no">{introduction.no}</h4>
                <h2 className="name">{introduction.name}</h2>
            </div>
        </Link>
    ) : null;
};

export default IntroductionLink;
