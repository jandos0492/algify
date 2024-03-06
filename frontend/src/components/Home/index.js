import React, { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import IntroductionLink from "../Links/IntroductionLink";
import ArrayAndStringLink from "../Links/ArrayAndStringLink";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./Home.css";

const Home = () => {
    const [introductionData, setIntroductionData] = useState([]);
    const [arrayAndStringData, setArrayAndStringData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isIntroductionVisible, setIsIntroductionVisible] = useState(true);
    const [isArrayAndStringVisible, setIsArrayAndStringVisible] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const IntroductionRes = await fetch("/api/introductions");
                const ArrayAndStringRes = await fetch("/api/array-and-strings");
                const introductionResult = await IntroductionRes.json();
                const ArrayAndStringResult = await ArrayAndStringRes.json();
                setIntroductionData(introductionResult);
                setArrayAndStringData(ArrayAndStringResult);
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
                {arrayAndStringData.map((arrayAndString) => (
                    <ArrayAndStringLink 
                        key={`${arrayAndString.name}-${arrayAndString.id}`}
                        arrayAndString={arrayAndString}
                        isVisible={isArrayAndStringVisible}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
