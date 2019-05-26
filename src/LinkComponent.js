import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LinkComponent extends Component {
  constructor(props) {
    super(props);
    this.state  = {
      visited: false
    };
    this.gotClicked  = this.gotClicked.bind(this);
    this.gotPointerMove = this.gotPointerMove.bind(this);
  }

  gotClicked(event) {
    event.preventDefault();
    console.log("I am event");
    console.log(event);
    console.log(event.target);
    if (this.state.visited) {
      this.setState({visited: false})
    } else {
      this.setState({visited: true});
    }
  }

  gotPointerMove(event) {
    // console.log(event);
    // console.log(event.target);
  }

  componentDidMount() {
    console.log("I am mounted and I am from LinkComponent");
  }

  render() {
    // let linkColor = this.props.color;
    let visitedColor = this.state.visited ? 'red': 'green';
    const linkStyle = {
      color: visitedColor,
      fontWeight: 700,
      fontSize: "40px"
    };

    return (
      <a onPointerMove={this.gotPointerMove} onClick={this.gotClicked} style={linkStyle} href={this.props.apiUrl}>{this.props.urlName}</a>
    );
  }
}

LinkComponent.propTypes =  {
  color: PropTypes.string,
  apiUrl: PropTypes.string,
  urlName: PropTypes.string,
}

export default LinkComponent;
