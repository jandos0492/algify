import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import "../Videos.css";

const BinaryTreeVideos = () => {
    const [binaryTreeData, setBinaryTreeData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const binaryTreeRes = await fetch(`/api/binary-trees/${id}`);
                const binaryTreeResult = await binaryTreeRes.json();
                setBinaryTreeData(binaryTreeResult);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching the Binary Tree data", err);
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
            {binaryTreeData.video ? (
                <>
                    <h2 className="video-name">{binaryTreeData.name}</h2>
                    <video key={binaryTreeData.video} controls className="video-one">
                        <source src={binaryTreeData.video} type="video/mp4" />
                    </video>
                </>
            ) : (
                <div className="video-container-2">
                    <div>
                        <h2 className="video-name">{binaryTreeData.name} approach</h2>
                        <video key={binaryTreeData.approachVideo} controls className="video-two">
                            <source src={binaryTreeData.approachVideo} type="video/mp4" />
                        </video>
                    </div>
                    <div>
                        <h2 className="video-name">{binaryTreeData.name} walkthrough</h2>
                        <video key={binaryTreeData.walkthroughVideo} controls className="video-two">
                            <source src={binaryTreeData.walkthroughVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BinaryTreeVideos;
