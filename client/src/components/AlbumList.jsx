import React from 'react';
import AlbumListEntry from './AlbumListEntry.jsx';

class AlbumList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.albums.map((album, i) => {
          return <AlbumListEntry key={i} album={album} />
        })}
      </div>
    );
  }
}

export default AlbumList;
