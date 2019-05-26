import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
  render() {
    console.log('I am the post from Post Compoent', this.props.post);
    return (<div className="postContainer">
      <ul>
        <li>
          id: {this.props.post.id}
        </li>
        <li>
          userId: {this.props.post.userId}
        </li>
        <li>
          title: {this.props.post.title}
        </li>
        <li>
          body: {this.props.post.body}
        </li>
      </ul>
    </div>);
  }
}


export default Post;
