import React, { useEffect, useState, Fragment } from 'react';
import Layout from '../Layout/Layout';
import folderService from '../services/folderService';

const Library = () => {
    // const [foldersList, setFoldersList] = useState([]);
    // const [folders, setFolders] = useState([]);

    // useEffect(() => {
    //     folderService.getFolders("C://")
    //         .then(res => setFoldersList(res.data))
    // }, [])

    // function toggleFolder(e) {
    //     var tmpFolders = folders;
    //     if (e.target.checked) {
    //         tmpFolders.push(e.target.value);
    //     } else {
    //         tmpFolders = tmpFolders.filter(folder => folder !== e.target.value)
    //     }

    //     setFolders(tmpFolders);
    // }

 return (
     <Layout>
         <div>chicken</div>
        {/* <h3>Select folders</h3>
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
        </ul> */}
     </Layout>
 );
}

export default Library;