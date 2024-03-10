import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import "../Videos.css";

const GraphVideos = () => {
    const [graphData, setGraphData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const graphRes = await fetch(`/api/graphs/${id}`);
                const graphResult = await graphRes.json();
                setGraphData(graphResult);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching the Graph data", err);
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
        <div className="video-container">
            {graphData.video ? (
                <>
                    <h2 className="video-name">{graphData.name}</h2>
                    <video key={graphData.video} controls className="video-one">
                        <source src={graphData.video} type="video/mp4" />
                    </video>
                </>
            ) : (
                <div className="video-container-2">
                    <div>
                        <h2 className="video-name">{graphData.name} approach</h2>
                        <video key={graphData.approachVideo} controls className="video-two">
                            <source src={graphData.approachVideo} type="video/mp4" />
                        </video>
                    </div>
                    <div>
                        <h2 className="video-name">{graphData.name} walkthrough</h2>
                        <video key={graphData.walkthroughVideo} controls className="video-two">
                            <source src={graphData.walkthroughVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
            )}
        </div>
    )
}

export default GraphVideos