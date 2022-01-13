import React from 'react'
import Cropper from 'react-cropper'
import Button from "@mui/material/Button"
import 'cropperjs/dist/cropper.css' // 引入Cropper对应的css

export default class Crop extends React.Component {
    constructor() {
        super();
        this.cropImage = this.cropImage.bind(this);
    }

    cropImage() {
        if (this.cropper.getCroppedCanvas() === 'null') {
            return false
        }
        this.props.getCropData(this.cropper.getCroppedCanvas().toDataURL())
    }

    render() {
        return (
            <div>
                <div style={{width: '100%'}}>
                    <Cropper
                        src={this.props.src}
                        className="company-logo-cropper"
                        ref={cropper => this.cropper = cropper}
                        // Cropper.js options
                        viewMode={1}
                        zoomable={false}
                        aspectRatio={1}  // 这个是设置比例的参数 我这里设置的1:1
                        cropBoxData={{ width: 100, height: 50 }} 
                        guides={false}
                        preview='.cropper-preview'
                      />
                </div>
                <div>
                    <Button type="primary" size="large" onClick={this.cropImage} style={{marginTop: '10px'}}>
                        确认裁剪
                    </Button>
                </div>
            </div>
        );
    }
}