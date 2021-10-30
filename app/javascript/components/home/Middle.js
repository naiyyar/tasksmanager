import React from "react"
import PropTypes from "prop-types"
import TaskList from './TaskList'

class Middle extends React.Component {
  render () {
    return (
      <React.Fragment>
      	<div className="col-lg-4">
      		<h2 className="pb-4">In Progress</h2>
      		<TaskList tasks={this.props.tasks} />
      	</div>
      	
      </React.Fragment>
    );
  }
}

export default Middle
