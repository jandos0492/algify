import React, { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import IntroductionLink from "../Links/IntroductionLink";
import ArrayAndStringLink from "../Links/ArrayAndStringLink";
import LinkedListLink from "../Links/LinkedListLink";
import BinaryTreeLink from "../Links/BinaryTreeLink";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./Home.css";

const Home = () => {
    const [introductionData, setIntroductionData] = useState([]);
    const [arrayAndStringData, setArrayAndStringData] = useState([]);
    const [linkedListData, setLinkedListData] = useState([]);
    const [binaryTreeData, setBinaryTreeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isIntroductionVisible, setIsIntroductionVisible] = useState(true);
    const [isArrayAndStringVisible, setIsArrayAndStringVisible] = useState(true);
    const [isLinkedListVisible, setLinkedListVisible] = useState(true);
    const [isBinaryTreeVisible, setIsBinaryTreeVisible] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const introductionRes = await fetch("/api/introductions");
                const arrayAndStringRes = await fetch("/api/array-and-strings");
                const linkedListRes = await fetch("/api/linked-lists");
                const binaryTreeRes = await fetch("/api/binary-trees");


                const introductionResult = await introductionRes.json();
                const arrayAndStringResult = await arrayAndStringRes.json();
                const linkedListResult = await linkedListRes.json();
                const binaryTreeResult = await binaryTreeRes.json();

                setIntroductionData(introductionResult);
                setArrayAndStringData(arrayAndStringResult);
                setLinkedListData(linkedListResult);
                setBinaryTreeData(binaryTreeResult);

                setLoading(false);
            } catch (err) {
                console.error("Error fetching the Introduction data", err);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const toggleIntroductionVisibility = () => {
        setIsIntroductionVisible((prevVisibility) => !prevVisibility);
    };

    const toggleArrayAndStringVisibility = () => {
        setIsArrayAndStringVisible((prevVisibility) => !prevVisibility);
    }

    const toggleLinkedListVisibility = () => {
        setLinkedListVisible((prevVisibility) => !prevVisibility);
    }

    const toggleBinaryTreeVisibility = () => {
        setIsBinaryTreeVisible((prevVisibility) => !prevVisibility);
    }


    if (loading) {
        return (
            <div className="loading">
                <InfinitySpin width="200" color="black" />
            </div>
        );
    }

    return (
        <div className="home-container">
            <button className="toggle-button" onClick={toggleIntroductionVisibility}>
                {isIntroductionVisible ? (
                    <>
                        Introduction <FaChevronDown />
                    </>
                ) : (
                    <>
                        Introduction <FaChevronUp />
                    </>
                )}
            </button>
            <div className="list">
                {introductionData.map((introduction) => (
                    <IntroductionLink
                        key={`${introduction.name}-${introduction.id}`}
                        introduction={introduction}
                        isVisible={isIntroductionVisible}
                    />
                ))}
            </div>
            <button className="toggle-button" onClick={toggleArrayAndStringVisibility}>
                {isArrayAndStringVisible ? (
                    <>
                        Array And String <FaChevronDown />
                    </>
                ) : (
                    <>
                        Array And String <FaChevronUp />
                    </>
                )}
            </button>
            <div className="list">
                {arrayAndStringData.map((arrayAndString) => (
                    <ArrayAndStringLink
                        key={`${arrayAndString.name}-${arrayAndString.id}`}
                        arrayAndString={arrayAndString}
                        isVisible={isArrayAndStringVisible}
                    />
                ))}
            </div>
            <button className="toggle-button" onClick={toggleLinkedListVisibility}>
                {isLinkedListVisible ? (
                    <>
                        Linked List <FaChevronDown />
                    </>
                ) : (
                    <>
                        Linked List <FaChevronUp />
                    </>
                )}
            </button>
            <div className="list">
                {linkedListData.map((linkedList) => (
                    <LinkedListLink
                        key={`${linkedList.name}-${linkedList.id}`}
                        linkedList={linkedList}
                        isVisible={isLinkedListVisible}
                    />
                ))}
            </div>
            <button className="toggle-button" onClick={toggleBinaryTreeVisibility}>
                {isBinaryTreeVisible ? (
                    <>
                        Binary Tree <FaChevronDown />
                    </>
                ): (
                    <>
                        Binary Tree <FaChevronUp />
                    </>
                )}
            </button>
            <div className="list">
                {binaryTreeData.map((binaryTree) => (
                    <BinaryTreeLink 
                        key={`${binaryTree.name}-${binaryTree.id}`}
                        binaryTree={binaryTree}
                        isVisible={isBinaryTreeVisible}
                    />
                ))}
            </div>
        </div >
    );
};

export default Home;
