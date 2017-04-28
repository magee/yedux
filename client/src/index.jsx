import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import data from './dummy_data.js';
import AlbumList from './components/AlbumList.jsx';
import NewAlbumForm from './components/NewAlbumForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: []
    };

    $.ajax({
      url: '/api/albums',
      method: 'GET',
      success: (data) => {
        this.setState({
          albums: data
        });
      },
      error: (err) => {
        console.log('Some Error:', err);
      }
    });

    this.submitNewAlbum = this.submitNewAlbum.bind(this);
  }

  submitNewAlbum(newAlbum) {
    $.ajax({
      url: '/api/albums',
      contentType: 'application/json',
      method: 'POST',
      data: JSON.stringify(newAlbum),
      success: (data) => {
        console.log("Posted the new album");
      },
      error: (err) => {
        console.log("Didn't post the album", err);
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Yedux</h1>
        <NewAlbumForm submitAlbum={this.submitNewAlbum} />
        <AlbumList albums={this.state.albums} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
