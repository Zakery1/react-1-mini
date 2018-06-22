import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      picture:'picture url',
      name: 'Eric',
      friends: [{
        name: 'My 404 friend',
        picture: 'https://http.cat/404'
      }, {
        name: 'My chill cat with the munchies',
        picture: 'https://http.cat/420'
      }]
    };
  }


  changeName(name) {
    this.setState({
      name: name,
    })
  }

  changePicture(picture){
    this.setState({
      picture: picture,
    })
  }


  render() {
    return (
      <div>
        Name: <input value={this.state.name} onChange={(event)=> this.changeName(event.target.value)} />
        Picture: <input value={this.state.picture} onChange={(event)=> this.changePicture(event.target.value)} />
        <div>
          {this.state.friends.map(friend => {
            return (
              <div>
                <img src={friend.picture}/>
                <b>{friend.name}</b>
              </div>
            )
          })}
        </div>
      </div>
      
    );
  }
}

export default App;


