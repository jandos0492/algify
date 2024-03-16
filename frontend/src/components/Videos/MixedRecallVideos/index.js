import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import "../Videos.css";

const MixedRecallVideos = () => {
    const [mixedRecallData, setMixedRecallData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const mixedRecallRes = await fetch(`/api/mixed-recalls/${id}`);
                const mixedRecallResult = await mixedRecallRes.json();
                setMixedRecallData(mixedRecallResult);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching the Mixed Recall data.", err);
                setLoading(false);
            }
        }

        fetchData();
    }, [id]);

    const { name, video, approachVideo, walkthroughVideo } = mixedRecallData;

    if (loading) {
        return (
            <div className="loading">
                <InfinitySpin width="200px" color="black" />
            </div>
        )
    }

    return (
        <div className="video-container" key={id}>
            {video ? (
                <div className="video-container-1-flex">
                    <h2 className="video-name">{name}</h2>
                    <video key={video} controls className="video-one">
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            ) : (
                <div className="video-container-2">
                    <div className="video-container-2-flex">
                        <h2 className="video-name">{name} approach</h2>
                        <video key={approachVideo} controls className="video-two">
                            <source src={approachVideo} type="video/mp4" />
                        </video>
                    </div>
                    <div className="video-container-2-flex">
                        <h2 className="video-name">{name} walkthrough</h2>
                        <video key={walkthroughVideo} controls className="video-two">
                            <source src={walkthroughVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
            )}
        </div>
    )
};

export default MixedRecallVideos;