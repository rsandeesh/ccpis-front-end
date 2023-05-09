import React, {useState} from 'react'
import './index.css'
import FileUpload from '../fileUpload/FileUpload';
import FileList from '../fileList/fileList';
import {Button} from 'react-bootstrap';
import {detectPatterns} from '../../api/detect/DetectApi';

const Upload = (data: { onResponse: () => {}, setFiles: () => {} }) => {
    const [files, setFiles] = useState([])
    const [result, setResult] = useState([])

    const removeFile = (filename) => {
        const files1 = files.filter(file => file.name !== filename);
        setFiles(files1)
        data.setFiles(files1);
    }
    const addFile = (event) => {
        console.log(event);
        const file = event.target.files[0];
        if (file) {
            const tempArr = [...files, file];
            setFiles(tempArr)
            data.setFiles(tempArr)
        }
    }

    const handleClick = async (e) => {
        e.preventDefault();
        const filesArr = files;
        let formData = new FormData();

        for (let index = 0; index < filesArr.length; index++) {
            formData.append('file', filesArr[index]);
        }

        await detectPatterns(formData).then((value: any) => {
            setResult(value);
            data.onResponse(value);
        })
    }

    return (
        <div className='upload'>
            <FileUpload
                addFile={addFile}
            />
            <FileList files={files}
                      removeFile={async (filename) => removeFile(filename)}
            />
            <Button id="predictBtn" variant="primary" onClick={handleClick}>PREDICT</Button>
        </div>
    );
}

export default Upload;