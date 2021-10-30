import React from "react"
import PropTypes from "prop-types"

class NewTask extends React.Component {

	constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
  	this.setState({value: event.target.value});
  }
  
  handleSubmit(event){
  	alert('A name was submitted: ' + this.state.value);
  	event.preventDefault();
  }

  render () {
    return (
      <React.Fragment>
      	<div>
      		<h2 className="pb-4">New Tasks</h2>
      		<div className="bg-light shadow rounded p-3 mb-1">
	      		<form onSubmit={this.handleSubmit}>
			        <div className="input-group mb-3">
			        	<input placeholder="Title" type="text" className="form-control" onChange={this.handleChange} />
			        	<input type="submit" value="Add" className="btn btn-outline-primary" />
			        </div>
			      </form>
			    </div>
      	</div>
      </React.Fragment>
    );
  }
}

export default NewTask
