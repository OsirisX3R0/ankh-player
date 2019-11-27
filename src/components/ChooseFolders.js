import React, { useEffect, useState, Fragment } from 'react';
import folderService from '../services/folderService';
// import { getFolderList } from '../../api/folders'
//var fs = require('fs');

const ChooseFolders = () => {
    const [folders, setFolders] = useState([]);

    useEffect(() => {
        //debugger;
        folderService.getFolders("C://")
            .then(res => setFolders(res.data))
    }, [])

 return (
     <Fragment>
        <h3>Select folders</h3>
        <ul className="files">
            {folders.map((f, i) => {
                return (
                    <li key={i}>
                        {f}
                        <label className="check">
                            <input type="checkbox" />
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