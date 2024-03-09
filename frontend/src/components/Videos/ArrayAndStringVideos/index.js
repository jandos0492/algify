import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import "../Videos.css";

const ArrayAndStringVideos = () => {
    const [arrayAndStringData, setArrayAndStringData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const arrayAndStringRes = await fetch(`/api/array-and-strings/${id}`);
                const arrayAndStringResult = await arrayAndStringRes.json();
                setArrayAndStringData(arrayAndStringResult);
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

    if (!arrayAndStringData) {
        return <div>No introduction data found for ID: {id}</div>;
    }

    return (
        <div className="video-container" key={id}>
            {arrayAndStringData.video ? (
                <>
                    <h2 className="video-name">{arrayAndStringData.name}</h2>
                    <video key={arrayAndStringData.video} controls className="video-one">
                        <source src={arrayAndStringData.video} type="video/mp4" />
                    </video>
                </>
            ) : (
                <div className="video-container-2">
                    <div>
                        <h2 className="video-name">{arrayAndStringData.name} approach</h2>
                        <video key={arrayAndStringData.approachVideo} controls className="video-two">
                            <source src={arrayAndStringData.approachVideo} type="video/mp4" />
                        </video>
                    </div>
                    <div>
                        <h2 className="video-name">{arrayAndStringData.name} walkthrough</h2>
                        <video key={arrayAndStringData.walkthroughVideo} controls className="video-two">
                            <source src={arrayAndStringData.walkthroughVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ArrayAndStringVideos;