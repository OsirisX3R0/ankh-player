import React, { Fragment } from 'react';
import AlbumListItem from './AlbumListItem';

const AlbumList = ({ albums }) => {
    const listItems = () => {
        if (albums) {
            return albums.map((album, i) => <AlbumListItem key={i} album={album} /> )
        }
    }

    return(
        <Fragment>
            {listItems()}
        </Fragment>
    )
}

export default AlbumList;