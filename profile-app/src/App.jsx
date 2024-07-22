import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'A passionate developer.',
        imgSrc: 'https://via.placeholder.com/150',
        profession: 'Software Engineer'
      },
      shows: false,
      mountedTime: 0
    };
    this.intervalId = null;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ mountedTime: this.state.mountedTime + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { person, shows, mountedTime } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Profile App</h1>
          <button onClick={this.toggleShow}>
            {shows ? 'Hide Profile' : 'Show Profile'}
          </button>
          {shows && (
            <div className="profile">
              <img src={person.imgSrc} alt={person.fullName} />
              <h2>{person.fullName}</h2>
              <p>{person.bio}</p>
              <h3>{person.profession}</h3>
            </div>
          )}
          <div className="mounted-time">
            Time since component mounted: {mountedTime} seconds
          </div>
        </header>
      </div>
    );
  }
}

export default App;
