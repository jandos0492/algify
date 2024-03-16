import React from "react";
import { NavLink } from "react-router-dom";
import "../Links.css";

const BinaryTreeLink = ({ binaryTree, isVisible }) => {

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    
    return isVisible ? (
        <NavLink
            to={`/binary-tree/${binaryTree.id}`}
            className="link"
            style={({ isActive }) => isActive ? { backgroundColor: "#21fd58" } : {}}
            onClick={handleClick}
        >
            <div className="info">
                <h4 className="no">{binaryTree.no}</h4>
                <h2 className="name">{binaryTree.name}</h2>
            </div>
        </NavLink>
    ) : null;
};

export default BinaryTreeLink;