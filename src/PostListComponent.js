
import React, { Component, Fragment} from 'react';
import Post from './Post';

class PostListComponent extends Component {
  render() {
    let postContainer = [];
    if (this.props.posts !== undefined) {
      this.props.posts.forEach((value, index) => {
        console.log(value);
        postContainer.push(<Post post={value} key={index} />);
      });
    }
    console.log('I am posts from props', this.props.posts);
    return (
      <Fragment>
        {postContainer}
      </Fragment>
    );
  }
}

export default PostListComponent;
