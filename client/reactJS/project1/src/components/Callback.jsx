import { Component } from 'react';
import Data from '../data/Data';

export class GetPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      POSTS: Data
    };
  }

  render() {
    return (
      <div>
        <h1>MY DAILY POSTS</h1>
        {this.state.POSTS.map((post, id) => {
          return (
            <ul key={id}>
              <li>{post.title}</li>
              <li>{post.body}</li>
            </ul>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    console.log('callback did mount!');
  }
}
