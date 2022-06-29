import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import flv from 'flv.js';

import { fetchStream } from '../../actions';

const StreamShow = () => {
    const { id } = useParams()
    const stream = useSelector((state) => state.streams[id]);
    const dispatch = useDispatch();
    const videoRef = useRef(null);

    useEffect(() => {
        if (!stream) {
            dispatch(fetchStream(id));
        }
        
        const player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        });

        player.attachMediaElement(videoRef.current);
        player.load();
        player.play();

        return () => {
            player.destroy();
        }
    }, [stream, id, videoRef.current]);

    const renderDetails = () => {
        if (!stream) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <h2>{stream.title}</h2>
                <h3>{stream.description}</h3>
            </div>
        );
    }
    

    return (
        <div>
            <video ref={videoRef} style={{ width: '100%' }} controls/>
            {renderDetails()}
        </div>
    );
}

export default StreamShow;