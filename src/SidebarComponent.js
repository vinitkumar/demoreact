import React, { Component, Fragment} from 'react';
import LinkComponent from './LinkComponent';
import NameForm from './NameForm';


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
        linkContainer.push(<li key={index}> <LinkComponent apiUrl={value.apiUrl} urlName={value.urlName} color={value.color}></LinkComponent></li>);
      });
    }
    return (
      <Fragment>
        <ul>
          {linkContainer}
        </ul>
        <NameForm />
      </Fragment>
    );
  }
}



export default SidebarComponent;

