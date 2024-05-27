import React, { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import IntroductionLink from "../Links/IntroductionLink";
import ArrayAndStringLink from "../Links/ArrayAndStringLink";
import LinkedListLink from "../Links/LinkedListLink";
import BinaryTreeLink from "../Links/BinaryTreeLink";
import GraphLink from "../Links/GraphLink";
import DynamicProgrammingLink from "../Links/DynamicProgrammingLink";
import StackLink from "../Links/Stack";
import ExhaustiveRecursionLink from "../Links/ExhaustiveRecursionLink";
import MixedRecallLink from "../Links/MixedRecallLink";
import BeginnerRecursionLink from "../Links/BeginnerRecursionLink";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./Home.css";

const Home = () => {
    const [introductionData, setIntroductionData] = useState([]);
    const [arrayAndStringData, setArrayAndStringData] = useState([]);
    const [linkedListData, setLinkedListData] = useState([]);
    const [binaryTreeData, setBinaryTreeData] = useState([]);
    const [graphData, setGraphData] = useState([]);
    const [dynamicProgrammingData, setDynamicProgrammingData] = useState([]);
    const [stackData, setStackData] = useState([]);
    const [exhaustiveRecursionData, setExhaustiveRecursionData] = useState([]);
    const [mixedRecallData, setMixedRecallData] = useState([]);
    const [beginnerRecursionData, setBeginnerRecursionData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isIntroductionVisible, setIsIntroductionVisible] = useState(false);
    const [isArrayAndStringVisible, setIsArrayAndStringVisible] = useState(false);
    const [isLinkedListVisible, setLinkedListVisible] = useState(false);
    const [isBinaryTreeVisible, setIsBinaryTreeVisible] = useState(false);
    const [isGraphVisible, setIsGraphVisible] = useState(false);
    const [isDynamicProgrammingVisible, setIsDynamicProgrammingVisible] = useState(false);
    const [isStackVisible, setIsStackVisible] = useState(false);
    const [isExhaustiveRecursionVisible, setIsExhaustiveRecursionVisible] = useState(false);
    const [isMixedRecallVisible, setIsMixedRecallVisible] = useState(false);
    const [isBeginnerRecursionVisible, setIsBeginnerRecursionVisible] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const introductionRes = await fetch("/api/introductions");
                const arrayAndStringRes = await fetch("/api/array-and-strings");
                const linkedListRes = await fetch("/api/linked-lists");
                const binaryTreeRes = await fetch("/api/binary-trees");
                const graphRes = await fetch("/api/graphs");
                const dynamicProgrammingRes = await fetch("/api/dynamic-programmings");
                const stackRes = await fetch("/api/stacks");
                const exhaustiveRecursionRes = await fetch("/api/exhaustive-recursions");
                const mixedRecallRes = await fetch("/api/mixed-recalls");
                const beginenrRecursionRes = await fetch("/api/beginner-recursions")

                const introductionResult = await introductionRes.json();
                const arrayAndStringResult = await arrayAndStringRes.json();
                const linkedListResult = await linkedListRes.json();
                const binaryTreeResult = await binaryTreeRes.json();
                const graphResult = await graphRes.json();
                const dynamicProgrammingResult = await dynamicProgrammingRes.json();
                const stackResult = await stackRes.json();
                const exhaustiveRecursionResult = await exhaustiveRecursionRes.json();
                const mixedRecallResult = await mixedRecallRes.json();
                const beginnerRecursionResult = await beginenrRecursionRes.json();

                setIntroductionData(introductionResult);
                setArrayAndStringData(arrayAndStringResult);
                setLinkedListData(linkedListResult);
                setBinaryTreeData(binaryTreeResult);
                setGraphData(graphResult);
                setDynamicProgrammingData(dynamicProgrammingResult);
                setStackData(stackResult);
                setExhaustiveRecursionData(exhaustiveRecursionResult);
                setMixedRecallData(mixedRecallResult);
                setBeginnerRecursionData(beginnerRecursionResult)

                setLoading(false);
            } catch (err) {
                console.error("Error fetching the all data", err);
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
    };

    const toggleLinkedListVisibility = () => {
        setLinkedListVisible((prevVisibility) => !prevVisibility);
    };

    const toggleBinaryTreeVisibility = () => {
        setIsBinaryTreeVisible((prevVisibility) => !prevVisibility);
    };

    const toggleGraphVisibility = () => {
        setIsGraphVisible((prevVisibility) => !prevVisibility);
    };

    const toggleDynamicProgrammingVisibility = () => {
        setIsDynamicProgrammingVisible((prevVisibility) => !prevVisibility);
    };

    const toggleStackVisibility = () => {
        setIsStackVisible((prevVisibility) => !prevVisibility);
    };

    const toggleExhaustiveRecursionVisibility = () => {
        setIsExhaustiveRecursionVisible((prevVisibility) => !prevVisibility);
    };

    const toggleMixedRecallVisibility = () => {
        setIsMixedRecallVisible((prevVisibility) => !prevVisibility);
    };

    const toggleBeginnerRecursionVisibility = () => {
        setIsBeginnerRecursionVisible((prevVisibility) => !prevVisibility);
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
                        Introduction   <FaChevronDown />
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
                        Array And String   <FaChevronDown />
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
            <button className="toggle-button" onClick={toggleBeginnerRecursionVisibility}>
                {isBeginnerRecursionVisible ? (
                    <>
                        Beginner Recursion   <FaChevronDown />
                    </>
                ) : (
                    <>
                        Beginner Recursion <FaChevronUp />
                    </>
                )}
            </button>
            <div className="list">
                {beginnerRecursionData.map((beginnerRecursion) => (
                    <BeginnerRecursionLink
                        key={`${beginnerRecursion.name}-${beginnerRecursion.id}`}
                        beginnerRecursion={beginnerRecursion}
                        isVisible={isBeginnerRecursionVisible}
                    />
                ))}
            </div>
            <button className="toggle-button" onClick={toggleLinkedListVisibility}>
                {isLinkedListVisible ? (
                    <>
                        Linked List    <FaChevronDown />
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
                        Binary Tree    <FaChevronDown />
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
                        Graph  <FaChevronDown />
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
            <button className="toggle-button" onClick={toggleDynamicProgrammingVisibility}>
                    {isDynamicProgrammingVisible ? (
                        <>
                            Dynamic Programming    <FaChevronDown />
                        </>
                    ) : (
                        <>
                            Dynamic Programming <FaChevronUp />
                        </>
                    )}
            </button>
            <div className="list">
                {dynamicProgrammingData.map((dynamicProgramming) => (
                    <DynamicProgrammingLink
                        key={`${dynamicProgramming.name}-${dynamicProgramming.id}`}
                        dynamicProgramming={dynamicProgramming}
                        isVisible={isDynamicProgrammingVisible}
                    />
                ))}
            </div>
            <button className="toggle-button" onClick={toggleStackVisibility}>
                {isStackVisible ? (
                    <>
                        Stack  <FaChevronDown />
                    </>
                ) : (
                    <>
                        Stack <FaChevronUp />
                    </>
                )}
            </button>
            <div className="list">
                {stackData.map((stack) => (
                    <StackLink 
                        key={`${stack.name}-${stack.id}`}
                        stack={stack}
                        isVisible={isStackVisible}
                    />
                ))}
            </div>
            <button className="toggle-button" onClick={toggleExhaustiveRecursionVisibility}>
                {isExhaustiveRecursionVisible ? (
                    <>
                        Exhaustive Recursion <FaChevronDown />
                    </>
                ) : (
                    <>
                        Exhaustive Recursion <FaChevronUp />
                    </>
                )}
            </button>
            <div className="list">
                {exhaustiveRecursionData.map((exhaustiveRecursion) => (
                    <ExhaustiveRecursionLink
                        key={`${exhaustiveRecursion.name}-${exhaustiveRecursion.id}`}
                        exhaustiveRecursion={exhaustiveRecursion}
                        isVisible={isExhaustiveRecursionVisible}
                    />
                ))}
            </div>
            <button className="toggle-button" onClick={toggleMixedRecallVisibility}>
                {isMixedRecallVisible ? (
                    <>
                        Mixed Recall <FaChevronDown />
                    </>
                ) : (
                    <>
                        Mixed Recall <FaChevronUp />
                    </>
                )}
            </button>
            <div className="list">
                {mixedRecallData.map((mixedRecall) => (
                    <MixedRecallLink 
                        key={`${mixedRecall.name}-${mixedRecall.id}`}
                        mixedRecall={mixedRecall}
                        isVisible={isMixedRecallVisible}
                    />
                ))}
            </div>
        </div >
    );
};

export default Home;
