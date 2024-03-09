import React from "react";
import { Link } from "react-router-dom";
import "../Links.css";

const MixedRecallLink = ({ mixedRecall, isVisible }) => {
    const { no, name } = mixedRecall;
    return isVisible ? (
        <Link to={`/mixed-recall/${mixedRecall.id}`} className="link">
            <div className="info">
                <h4 className="no">{no}</h4>
                <h2 className="name">{name}</h2>
            </div>
        </Link>
    ): null
};

export default MixedRecallLink;