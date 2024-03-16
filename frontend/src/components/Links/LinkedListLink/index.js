import React from "react";
import { NavLink } from "react-router-dom";
import "../Links.css";

const LinkedListLink = ({ linkedList, isVisible }) => {

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return isVisible ? (
        <NavLink
            to={`/linked-list/${linkedList.id}`}
            className="link"
            style={({ isActive }) => isActive ? { backgroundColor: "#21fd58" } : {}}
            onClick={handleClick}
        >
            <div className="info">
                <h4 className="no">{linkedList.no}</h4>
                <h2 className="name">{linkedList.name}</h2>
            </div>
        </NavLink>
    ) : null
};

export default LinkedListLink;