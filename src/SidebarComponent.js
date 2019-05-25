import React, { Component, Fragment} from 'react';

class LinkComponent extends Component {

  componentDidMount() {
    console.log("I am mounted and I am from LinkComponent");
  }

  render() {
    return (
      <a href={this.props.apiUrl}>{this.props.urlName}</a>
    );
  }
}

class SidebarComponent extends Component {
  componentDidMount() {
    console.log(" I am mounted and I am from SidebarComponent")
  }
  render() {
    console.log('I am the props', this.props);
    console.log(this.props.urllist.length);
    let linkContainer = [];  
    if (this.props.urllist) {
      this.props.urllist.forEach((value, index) => {
        linkContainer.push(<li key={index}> <LinkComponent apiUrl={value.apiUrl} urlName={value.urlName}></LinkComponent></li>);
      });
    }
    return (
      <Fragment>
        <ul>
          {linkContainer}
        </ul>
      </Fragment>
    );
  }
}



export default SidebarComponent;

