import React, {Component, Fragment} from 'react';

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      value: 'enter value here',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.value);
    // api endpoint
    // example.com/api/v1/updatevalue (POST)
    // We can send an API call to this endpoint, with this value
    // data = {
    //    name: this.state.value
    //}
    // response = http.POST(url, data={data})
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <Fragment>
        <p> Currently my value is {this.state.value}</p>
        
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="submit" />
        </form>
      </Fragment>
    );
  }
}

export default NameForm;