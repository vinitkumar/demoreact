import React, { Component, Fragment} from 'react';
import getData from './Api';
import { timingSafeEqual } from 'crypto';


class Post extends Component {
  render() {
    console.log('I am the post from Post Compoent', this.props.post);
    return (
      <div>
        <ul>
          <li>
            id: { this.props.post.id}
          </li>
          <li>
            userId: {this.props.post.userId}
          </li>
          <li>
            title: {}
          </li>
        </ul>
       

      </div>
    );
  }
}

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


class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      postData: []
    };
  }

  componentDidMount() {
    let data = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    }];
    this.setState({
      loading: false,
      postData: data
    });
  }

  render() {
    console.log(this.state);
    return (
      <Fragment>
        { this.state.loading && <p>Loading ....</p>}
        { !this.state.loading && <PostListComponent posts={this.state.postData } />}
      </Fragment>
    );
  }
}

export default MainComponent;