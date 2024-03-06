import React from "react";
import { Link } from "react-router-dom";
import "../Links.css";

const LinkedListLink = ({ linkedList, isVisible }) => {
    return isVisible ? (
        <Link to={`/linked-list/${linkedList.id}`} className="link">
            <div className="info">
                <h4 className="no">{linkedList.no}</h4>
                <h2 className="name">{linkedList.name}</h2>
            </div>
        </Link>
    ) : null
};

export default LinkedListLink;