import React from 'react';

class AlbumListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const album = this.props.album;
    return (
      <div>
        <h3>{album.era}</h3> - <span>{album.year}</span>
        <div>{album.description}</div>
        <img src={album.imageUrl} />
      </div>
    );
  }
}

export default AlbumListEntry;
