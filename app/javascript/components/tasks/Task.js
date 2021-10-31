import React from "react"
import PropTypes from "prop-types"

const Task = (props) => {
  return (
    <li className="list-group-item">
      <input className="form-check-input me-2" type="checkbox" value="" />
      {props.task.title}
      
      <div className='float-end' onClick={() => props.handleDelete(props.task.id)}>
        <span className='fa fa-edit text-primary me-2'></span>
        <span className='fa fa-trash text-danger'></span>
      </div>
    </li>
  )
}

export default Task
