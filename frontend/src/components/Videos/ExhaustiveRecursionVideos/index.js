import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import "../Videos.css";

const ExhaustiveRecursionVideos = () => {
    const [exhaustiveRecursionData, setExhaustiveRecursionData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const exhaustiveRecursionRes = await fetch(`/api/exhaustive-recursions/${id}`);
                const exhaustiveRecursionResult = await exhaustiveRecursionRes.json();
                setExhaustiveRecursionData(exhaustiveRecursionResult);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching the Exhaustive Recursion data.", err);
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

    const { name, video, approachVideo, walkthroughVideo } = exhaustiveRecursionData;

    return (
        <div className="video-container">
            {video ? (
                <>
                    <h2 className="video-name">{name}</h2>
                    <video key={video} controls className="video-one">
                        <source src={video} type="video/mp4" />
                    </video>
                </>
            ) : (
                <div className="video-container-2">
                    <div>
                        <h2 className="video-name">{name} approach</h2>
                        <video key={approachVideo} controls className="video-two" >
                            <source src={approachVideo} type="video/mp4" />
                        </video>
                    </div>
                    <div>
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

export default ExhaustiveRecursionVideos;