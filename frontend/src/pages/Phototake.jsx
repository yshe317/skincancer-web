import React, {useState,useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Webcam from "react-webcam";
import { Stack ,
    Container} from '@mui/material';
import Imagecut from "./imagecut"
const Phototake = () => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
    const videoConstraints = {
        // width: 244,
        // height: 244,
        facingMode: "environment"
      };
    return (
        <Container>
            <Stack>
                <Paper>
                    <Webcam videoConstraints={videoConstraints} forceScreenshotSourceSize={true} audio={false}  ref={webcamRef} screenshotFormat="image/jpg"/>
                    <button onClick={()=>{
                        // {width: 244, height: 244}
                        const imageSrc = webcamRef.current.getScreenshot();
                        setImgSrc(imageSrc);
                    }}>Capture photo</button>
                    
                    {imgSrc && (
                        <img
                        src={imgSrc}
                        />
                    )}
                </Paper>
                {imgSrc && (
                        <Imagecut
                        src={imgSrc}
                        />
                )}
            </Stack>
        </Container>
    )
};

export default Phototake;
