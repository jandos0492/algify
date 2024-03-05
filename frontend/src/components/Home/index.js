import React, { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";

const Home = () => {
    const [ introductionData, setIntroductionData ] = useState([]);
    const [ loading, setLoading ] = useState(true);

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
        }

        fetchData();
    }, [])

    if (loading) {
        return (
            <div className="loading">
                <InfinitySpin width="200" color="black" />
            </div>
        )
    }

    return (
        <div className="list">
            {introductionData.map((introduction) => (
                introduction.name
            ))}
        </div>
    )
};


export default Home;