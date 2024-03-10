import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import "../Videos.css";

const DynamicProgrammingVideos = () => {
    const [dynamicProgrammingData, setDynamicProgrammingData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dynamicProgrammingRes = await fetch(`/api/dynamic-programmings/${id}`);
                const dynamicProgrammingResult = await dynamicProgrammingRes.json();
                setDynamicProgrammingData(dynamicProgrammingResult);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching the Dynamic Programming data", err);
                setLoading(false);
            }
        }
        fetchData();
    }, [id]);

    if (loading) {
        return (
            <div className="loading">
                <InfinitySpin width="200px" color="black" />
            </div>
        )
    }

    return (
        <div className="video-container" key={id}>
            {dynamicProgrammingData.video ? (
                <>
                    <h2 className="video-name">{dynamicProgrammingData.name}</h2>
                    <video key={dynamicProgrammingData.video} controls className="video-one">
                        <source src={dynamicProgrammingData.video} type="video/mp4" />
                    </video>
                </>
            ) : (
                <div className="video-container-2">
                    <div>
                        <h2 className="video-name">{dynamicProgrammingData.name} approach</h2>
                        <video
                            key={dynamicProgrammingData.approachVideo}
                            controls
                            className="video-two"
                        >
                            <source src={dynamicProgrammingData.approachVideo} type="video/mp4" />
                        </video>
                    </div>
                    <div>
                        <h2 className="video-name">{dynamicProgrammingData.name} walkthrough</h2>
                        <video 
                            key={dynamicProgrammingData.walkthroughVideo}
                            controls
                            className="video-two"
                        >
                            <source src={dynamicProgrammingData.walkthroughVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DynamicProgrammingVideos;