import React from "react";
import { Link } from "react-router-dom";
import "../Links.css";

const BinaryTreeLink = ({ binaryTree, isVisible }) => {
    return isVisible ? (
        <Link to={`/binary-tree/${binaryTree.id}`} className="link">
            <div className="info">
                <h4 className="no">{binaryTree.no}</h4>
                <h2 className="name">{binaryTree.name}</h2>
            </div>
        </Link>
    ) : null;
};

export default BinaryTreeLink;