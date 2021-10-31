import React from "react"
import PropTypes from "prop-types"
import TaskActions from "../tasks/TaskActions"
import Task from "../tasks/Task"

const TaskList = (props) => {
	var tasks = props.tasks.map((task) => {
  	return (
  		<div key={task.id}>
  			<Task task={task} handleDelete = {props.handleDelete} />
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
