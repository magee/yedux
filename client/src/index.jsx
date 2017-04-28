import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import data from './dummy_data.js';
import AlbumList from './components/AlbumList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Yedux</h1>
        <AlbumList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
