import React, { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import IntroductionLink from "../Links/IntroductionLink";
import ArrayAndStringLink from "../Links/ArrayAndStringLink";
import LinkedListLink from "../Links/LinkedListLink";
import BinaryTreeLink from "../Links/BinaryTreeLink";
import GraphLink from "../Links/GraphLink";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./Home.css";

const Home = () => {
    const [introductionData, setIntroductionData] = useState([]);
    const [arrayAndStringData, setArrayAndStringData] = useState([]);
    const [linkedListData, setLinkedListData] = useState([]);
    const [binaryTreeData, setBinaryTreeData] = useState([]);
    const [graphData, setGraphData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isIntroductionVisible, setIsIntroductionVisible] = useState(false);
    const [isArrayAndStringVisible, setIsArrayAndStringVisible] = useState(false);
    const [isLinkedListVisible, setLinkedListVisible] = useState(false);
    const [isBinaryTreeVisible, setIsBinaryTreeVisible] = useState(false);
    const [isGraphVisible, setIsGraphVisible] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const introductionRes = await fetch("/api/introductions");
                const arrayAndStringRes = await fetch("/api/array-and-strings");
                const linkedListRes = await fetch("/api/linked-lists");
                const binaryTreeRes = await fetch("/api/binary-trees");
                const graphRes = await fetch("/api/graphs");


                const introductionResult = await introductionRes.json();
                const arrayAndStringResult = await arrayAndStringRes.json();
                const linkedListResult = await linkedListRes.json();
                const binaryTreeResult = await binaryTreeRes.json();
                const graphResult = await graphRes.json();

                setIntroductionData(introductionResult);
                setArrayAndStringData(arrayAndStringResult);
                setLinkedListData(linkedListResult);
                setBinaryTreeData(binaryTreeResult);
                setGraphData(graphResult);

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

    const toggleGraphVisibility = () => {
        setIsGraphVisible((prevVisibility) => !prevVisibility);
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
                ) : (
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
            <button className="toggle-button" onClick={toggleGraphVisibility}>
                {isGraphVisible ? (
                    <>
                        Graph <FaChevronDown />
                    </>
                ) : (
                    <>
                        Graph <FaChevronUp />
                    </>
                )}
            </button>
            <div className="list">
                {graphData.map((graph) => (
                    <GraphLink
                        key={`${graph.name}-${graph.id}`}
                        graph={graph}
                        isVisible={isGraphVisible}
                    />
                ))}
            </div>
        </div >
    );
};

export default Home;
