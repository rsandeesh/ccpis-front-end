import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './index.css'
import axios from 'axios'

const FileUpload = (data: { addFile: () => {} }) => {

    const uploadHandler = (event) => {
        console.log(event)
        data.addFile(event);

        // axios.post('', formData)
        //     .then((res) => {
        //         file.isUploading = false;
        //         setFiles([...files, file])
        //     })
        //     .catch((err) => {
        //         console.error(err)
        //         removeFile(file.name)
        //     })
    }

    return (
        <>
            <div className='file-card'>
                <div className='file-inputs'>
                    <input type='file' onChangeCapture={uploadHandler} />
                    <button>
                        <i>
                            {<FontAwesomeIcon icon={faPlus} />}
                        </i>
                        Upload
                    </button>
                </div>
                <p className="main">Support files</p>
                <p className="info">JPG, PNG</p>
            </div>
        </>
    )
}

export default FileUpload