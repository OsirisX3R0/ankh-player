import React, { useEffect, useState, Fragment } from 'react';
import folderService from '../services/folderService';
// import { getFolderList } from '../../api/folders'
//var fs = require('fs');

const ChooseFolders = () => {
    const [foldersList, setFoldersList] = useState([]);
    const [folders, setFolders] = useState([]);

    useEffect(() => {
        //debugger;
        folderService.getFolders("C://")
            .then(res => setFoldersList(res.data))
    }, [])

    function toggleFolder(e) {
        var tmpFolders = folders;
        if (e.target.checked) {
            tmpFolders.push(e.target.value);
        } else {
            tmpFolders = tmpFolders.filter(folder => folder !== e.target.value)
        }

        setFolders(tmpFolders);
    }

 return (
     <Fragment>
        <h3>Select folders</h3>
        <ul className="files">
            {foldersList.map((f, i) => {
                return (
                    <li key={i}>
                        {f}
                        <label className="check">
                            <input type="checkbox" onChange={toggleFolder} value={f} />
                            <span></span>
                        </label>
                    </li>
                )
            })}
        </ul>
     </Fragment>
 );
}

export default ChooseFolders;