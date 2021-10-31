import React from "react"
import PropTypes from "prop-types"
import TaskList from './TaskList'

class RightSide extends React.Component {
  render () {
    return (
      <React.Fragment>
      	<div className="col-lg-4">
      		<h2 className="p-3 shadow bg-success text-white rounded">Completed ({this.props.tasks.length})</h2>
      		<TaskList tasks={this.props.tasks} />
      	</div>
      	
      </React.Fragment>
    );
  }
}

export default RightSide
