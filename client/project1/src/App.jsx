import { Component } from 'react';
import './App.css';
import { GetPosts } from './components/Callback';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    console.log('Constructor is invoked!');
  }

  componentDidMount() {
    console.log('componentDidMount works');
  }

  onChangeClick(val) {
    this.setState({
      value: val + 1
    });
  }

  render() {
    console.log('Render method is invoked!');

    return (
      <div className="container ">
        <button
          onClick={() => {
            this.onChangeClick(this.state.value);
          }}
          className="paintRed">
          <p>Click</p>
          {this.state.value}
        </button>

        <article>
          <GetPosts />
        </article>
      </div>
    );
  }

  componentDidUpdate() {
    console.log('componentdidupdate works fine!');
  }

  shouldComponentUpdate() {
    return true;
  }

  // getSnapshotBeforeUpdate(){

  // }
}

export default App;
