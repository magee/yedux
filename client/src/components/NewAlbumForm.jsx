import React from 'react';

class NewAlbumForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      year: '',
      description: '',
      coverArtUrl: ''
    }
  }

  render () {
    return (
      <div>
        Name: <input value={this.state.name} onChange={(e) => this.setState({ name: e.target.value})} /><br />
        Year: <input value={this.state.year} onChange={(e) => this.setState({ year: e.target.value })} /><br />
        Description: <input value={this.state.description} onChange={(e) => this.setState({ description: e.target.value })} /><br />
        Cover Art (url): <input value={this.state.coverArtUrl} onChange={(e) => this.setState({ coverArtUrl: e.target.value })} /><br />
        <button onClick={() => this.props.submitAlbum(this.state)}>Submit</button>
      </div>
    )
  }
}

export default NewAlbumForm;
