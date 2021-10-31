import React from "react"
import PropTypes from "prop-types"
import TaskActions from "../tasks/TaskActions"

const TaskList = (props) => {
	var tasks = props.tasks.map((task) => {
  	return (
  		<div key={task.id}>
  			<li className="list-group-item">
  				<input className="form-check-input me-2" type="checkbox" value="" />
  				{task.title}
  				<span className="pull-right">...</span>
  			</li>
  		</div>
  	)
  });

  return (
  	<div className="bg-light shadow rounded p-2 mb-5">
  		<TaskActions />
      <ul className="list-group list-group-flush">
			  {tasks}
			</ul>
		</div>
  )
}

export default TaskList
