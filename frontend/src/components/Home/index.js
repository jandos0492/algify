// import React, { useEffect, useState } from "react";
// import { InfinitySpin } from "react-loader-spinner";
// import IntroductionLink from "../Links/IntroductionLink";

// const Home = () => {
//     const [ introductionData, setIntroductionData ] = useState([]);
//     const [ loading, setLoading ] = useState(true);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch("/api/introductions");
//                 const result = await response.json();
//                 setIntroductionData(result);
//                 setLoading(false);
//             } catch (err) {
//                 console.error("Error fetching the Introduction data", err);
//                 setLoading(false);
//             }
//         }

//         fetchData();
//     }, [])

//     if (loading) {
//         return (
//             <div className="loading">
//                 <InfinitySpin width="200" color="black" />
//             </div>
//         )
//     }

//     return (
//         <div className="list">
//             {introductionData.map((introduction) => (
//                 <IntroductionLink key={`${introduction.name}-${introduction.id}`} introduction={introduction} />
//             ))}
//         </div>
//     )
// };


// export default Home;

import React, { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import IntroductionLink from "../Links/IntroductionLink";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./Home.css";

const Home = () => {
    const [introductionData, setIntroductionData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isIntroductionVisible, setIsIntroductionVisible] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/introductions");
                const result = await response.json();
                setIntroductionData(result);
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
        </div>
    );
};

export default Home;
