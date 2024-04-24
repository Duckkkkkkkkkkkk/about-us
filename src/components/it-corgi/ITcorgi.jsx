import React, { useRef } from 'react';
import { Button, Container } from "react-bootstrap";

import video from './../../img/video/video2.mp4'

const ITcorgi = () => {
    const videoRef = useRef(null);

    const handlePlayVideo = () => {
      if (videoRef.current && videoRef.current.readyState === 4) {
        videoRef.current.play();
      }
    };

    return ( 
        <div className="position-relative">
            <Container fluid>
                <div className="embed-responsive embed-responsive-1by1">
                    <video 
                        ref={videoRef} 
                        className="embed-responsive-item" 
                        src={video} 
                        controls autoPlay muted playsInline
                        style={{maxHeight: '500px'}}
                        >
                    </video>
                </div>
                {/* <Button onClick={handlePlayVideo}>Play Video</Button> */}
            </Container>
        </div>
    );
}
 
export default ITcorgi;
