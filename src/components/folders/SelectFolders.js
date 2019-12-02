import React, { useState } from 'react';
import folderService from '../../services/folderService';
import useStorage from '../../hooks/useStorage';

const SelectFolders = () => {
    const [songs, setSongs] = useStorage('songs')
    
    const displayFolders = (e) => {
        if (e.target.files.length > 0) {
            let files = [...e.target.files]
                .filter(file => file.type.includes("audio"))
                .map(file => file.webkitRelativePath)

            // files.forEach(file => {
            //     // ffmetadata.read(file, (err,  data) => {
            //     //     if (err) console.error(err);
            //     //     file = data;
            //     // })
            // })

            folderService.scanLibrary(files)
                
            // setSongs(files)
        }
    }

    return(
        <div className="folder-select">
            <h3>Select Folders</h3>
            <label className="custom-input" htmlFor="select-folders">Select Files</label>
            <input 
            type="file" 
            className="file-input" 
            id="select-folders" 
            onChange={displayFolders}
            webkitdirectory="true" directory="true" multiple />
        </div>
    )
}

export default SelectFolders;