import React, { useEffect, useState, Fragment } from 'react';
import SelectFolders from './folders/SelectFolders';
import NowPlaying from './NowPlaying';
import AlbumList from './albums/AlbumList';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import useStorage from '../hooks/useStorage';
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
    const [songs, setSongs] = useStorage('songs')

    const noFolders = (el) => {
        if (!songs) {
            return <SelectFolders />
        } else {
            return el
        }
    }
 return (
     <Fragment>
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
        <Tabs>
            <TabPanel>
                {noFolders(<AlbumList />)}
            </TabPanel>
            <TabPanel>Artists</TabPanel>
            <TabPanel>Songs</TabPanel>
            <TabPanel>Playlists</TabPanel>

            <TabList>
                <Tab>Albums</Tab>
                <Tab>Artists</Tab>
                <Tab>Songs</Tab>
                <Tab>Playlists</Tab>
            </TabList>
        </Tabs>
        <NowPlaying />
     </Fragment>
 );
}

export default Library;