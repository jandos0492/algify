import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import "../Videos.css";

const LinkedListVideos = () => {
    const [linkedListData, setLinkedListData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const linkedListRes = await fetch(`/api/linked-lists/${id}`);
                const linkedListResult = await linkedListRes.json();
                setLinkedListData(linkedListResult);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching the Linked List data", err);
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
        <div className="video-container">
            {linkedListData.video ? (
                <>
                    <h2 className="video-name">{linkedListData.name}</h2>
                    <video key={linkedListData.video} controls className="video-one">
                        <source src={linkedListData.video} type="video/mp4" />
                    </video>
                </>
            ) : (
                <div className="video-container-2">
                    <div>
                        <h2 className="video-name">{linkedListData.name} approach</h2>
                        <video key={linkedListData.approachVideo} controls className="video-two">
                            <source src={linkedListData.approachVideo} type="video/mp4" />
                        </video>
                    </div>
                    <div>
                        <h2 className="video-name">{linkedListData.name} walkthrough</h2>
                        <video key={linkedListData.walkthroughVideo} controls className="video-two">
                            <source src={linkedListData.walkthroughVideo} type="video/mp4" />
                        </video>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LinkedListVideos;