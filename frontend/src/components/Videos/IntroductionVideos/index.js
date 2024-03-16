import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import "../Videos.css";

const IntroductionVideos = () => {
    const [introductionData, setIntroductionData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const introductionRes = await fetch(`/api/introductions/${id}`);
                const introductionResult = await introductionRes.json();
                setIntroductionData(introductionResult);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching the Introduction data", err);
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return (
            <div className="loading">
                <InfinitySpin width="200" color="black" />
            </div>
        );
    }

    return (
        <div className="video-container" key={id}>
            {introductionData.video ? (
                <div className="video-container-1-flex">
                    <h2 className="video-name">{introductionData.name}</h2>
                    <video key={introductionData.video} controls className="video-one">
                        <source src={introductionData.video} type="video/mp4" />
                    </video>
                </div>
            ) : (
                <div className="video-container-2">
                    <div className="video-container-2-flex">
                        <h2 className="video-name">{introductionData.name} approach</h2>
                        <video key={introductionData.approachVideo} controls className="video-two">
                            <source src={introductionData.approachVideo} type="video/mp4" />
                        </video>
                    </div>
                    <div className="video-container-2-flex">
                        <h2 className="video-name">{introductionData.name} walkthrough</h2>
                        <video key={introductionData.walkthroughVideo} controls className="video-two">
                            <source src={introductionData.walkthroughVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
            )}
        </div>
    );
};

export default IntroductionVideos;
