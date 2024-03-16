import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import "../Videos.css";

const StackVideos = () => {
    const [stackData, setStackData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const stackRes = await fetch(`/api/stacks/${id}`);
                const stackResult = await stackRes.json();
                setStackData(stackResult);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching the Stack data", err);
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
            {stackData.video ? (
                <div className="video-container-1-flex">
                    <h2 className="video-name">{stackData.name}</h2>
                    <video
                        key={stackData.video}
                        controls
                        className="video-one"
                    >
                        <source src={stackData.video} type="video/mp4" />
                    </video>
                </div>
            ) : (
                <div className="video-container-2">
                    <div className="video-container-2-flex">
                        <h2 className="video-name">{stackData.name} approach</h2>
                        <video
                            key={stackData.approachVideo}
                            controls
                            className="video-two"
                        >
                            <source src={stackData.approachVideo} type="video/mp4" />
                        </video>
                    </div>
                    <div className="video-container-2-flex">
                        <h2 className="video-name">{stackData.name} walkthrough</h2>
                        <video
                            key={stackData.walkthroughVideo}
                            controls
                            className="video-two"
                        >
                            <source src={stackData.walkthroughVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
            )}
        </div>
    )
};

export default StackVideos;