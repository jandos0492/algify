import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import "../Videos.css";

const BeginnerRecursionVideos = () => {
    const [beginnerRecursionData, setBeginnerRecursionData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const beginnerRecursionRes = await fetch(`/api/beginner-recursions/${id}`);
                const beginnerRecursionResult = await beginnerRecursionRes.json();
                setBeginnerRecursionData(beginnerRecursionResult);
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
            {beginnerRecursionData.video ? (
                <div className="video-container-1-flex">
                    <h2 className="video-name">{beginnerRecursionData.name}</h2>
                    <video
                        key={beginnerRecursionData.video}
                        controls="true"
                        className="video-one"
                    >
                        <source src={beginnerRecursionData.video} type="video/mp4" />
                    </video>

                </div>
            ) : (
                <div className="video-container-2">
                    <div className="video-container-2-flex">
                        <h2 className="video-name">{beginnerRecursionData.name} approach</h2>
                        <video
                            key={beginnerRecursionData.approachVideo}
                            controls
                            className="video-two">
                            <source src={beginnerRecursionData.approachVideo} type="video/mp4" />
                        </video>
                    </div>
                    <div className="video-container-2-flex">
                        <h2 className="video-name">{beginnerRecursionData.name} walkthrough</h2>
                        <video
                            key={beginnerRecursionData.walkthroughVideo}
                            controls
                            className="video-two">
                            <source src={beginnerRecursionData.walkthroughVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BeginnerRecursionVideos;
