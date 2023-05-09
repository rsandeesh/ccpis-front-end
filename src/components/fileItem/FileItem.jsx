import React from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faSpinner, faTrash } from '@fortawesome/free-solid-svg-icons'

const FileItem = (data: { file: any, deleteFile: (filename: any) => {} }) => {
    return (
        <li
            className='list-item'
            key={data.file.name}
        >
            <FontAwesomeIcon icon={faImage} />
            <div>{data.file.name}</div>
            <div className="actions">
                <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => data.deleteFile(data.file.name)} />


            </div>
        </li>
    )
}

export default FileItem