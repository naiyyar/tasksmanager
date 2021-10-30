import React from "react"
import PropTypes from "prop-types"

const TaskList = (props) => {
	var tasks = props.tasks.map((task) => {
  	return (
  		<div key={task.id}>
  			<li className="list-group-item">{task.title}</li>
  		</div>
  	)
  });

  return (
  	<div className="bg-light shadow rounded p-3 mb-5">
      <ul className="list-group list-group-flush">
			  {tasks}
			</ul>
		</div>
  )
}

export default TaskList
