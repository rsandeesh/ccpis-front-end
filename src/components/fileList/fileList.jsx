import React from 'react'
import FileItem from '../fileItem/FileItem'
import './index.css';

const FileList = (data: { files: any, removeFile: (filename: string) => {} }) => {
    console.log(data.files)

    const deleteFileHandler = (filename: any) => {
        console.log(filename);
        data.removeFile(filename)
    }
    return (
        <ul className="file-list" >
            {
                data.files &&
                data.files.map(f => <FileItem
                    id={f.name}
                    key={f.name}
                    file={f}
                    deleteFile={async (filename) => deleteFileHandler(filename)}
                />)
            }
        </ul>
    )
}

export default FileList