import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch('http://localhost:5000/bing', {
      method: 'POST',
      body: formData
    }).then(response => {
      console.log(response)
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Request failed');
      }
    }).then(data => {
      this.setState({ apiData: this.state.data });
      console.log(data)
    }).catch(error => {
      console.error(error);
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter data:
            <input type="text" name="data" />
          </label>
          <button type="submit">Submit</button>
        </form>
        <p>Hi</p>
        <p>{this.state.apiData}</p>
      </div>
    );
  }
}

export default App;