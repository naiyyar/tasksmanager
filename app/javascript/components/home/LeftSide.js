import React from "react"
import PropTypes from "prop-types"
import TaskList from './TaskList'
import NewTask from '../tasks/NewTask'

class LeftSide extends React.Component {
  render () {
    return (
      <React.Fragment>
      	<div className="col-lg-4">
      		<NewTask />
			    <TaskList tasks={this.props.tasks} />
      	</div>
      </React.Fragment>
    );
  }
}

export default LeftSide
