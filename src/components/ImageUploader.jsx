import React, { useRef, useState, useEffect } from 'react';
import Button from '@mui/material/Button';

const ImageUpload = (props) => {
    const [previewUrl, setPreviewUrl] = useState();
    const [isValid, setIsValid] = useState(false);

    const filePickerRef = useRef();
    
    useEffect(() => {
        if (!props.file) {
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewUrl(fileReader.result);
        };
        fileReader.readAsDataURL(props.file);
    }, [props.file]);
    
    const pickedHandler = (event) => {
        let pickedFile;
        if (event.target.files && event.target.files.length === 1) {
            pickedFile = event.target.files[0];
            props.setFile(pickedFile);
            setIsValid(true);
        }
        else {
            setIsValid(false);
        }
    };

    const pickImageHandler = () => {
        filePickerRef.current.click();
    };

    return ( 
        <div className="image-uploader-div">        
           <label className="login-buttons">Upload Image
                <input type="text"
                    id={props.user._id}
                    ref={filePickerRef}
                    type="file"
                    accept=".jpg,.png,.jpeg"
                    onChange={pickedHandler}
                />
           </label><span className="img-desc">{!props.file ? null : props.file.name}</span>
        </div>
     );
}
 
export default ImageUpload;
