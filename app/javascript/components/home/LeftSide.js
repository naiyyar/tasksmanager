import React from "react"
import PropTypes from "prop-types"
import TaskList from './TaskList'
import NewTask from '../tasks/NewTask'

class LeftSide extends React.Component {

	constructor(props){
		super(props);
		this.state = {
      tasks: props.tasks
    };
		this.handleSubmit = this.handleSubmit.bind(this)
		this.addNewTask = this.addNewTask.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
		this.deleteTask = this.deleteTask.bind(this)
	}
  
	handleSubmit(title){
		let params = JSON.stringify({task: { title: title, status: 'pending' } })
		
		fetch('http://localhost:3000/tasks', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: params,
		}).then((response) => {
			return response.json();
		}).then((task) => {
			this.addNewTask(task);
		})
	}

	addNewTask(task){
		this.setState({
			tasks: this.state.tasks //.splice(0, 0, ...[task])
		})
	}

	handleDelete(id){
		fetch(`http://localhost:3000/tasks/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			},
		}).then((response) => {
			this.deleteTask(id)
			alert('task deleted')
		});
	}

	deleteTask(id){
    let newTasks = this.state.tasks.filter((task) => task.id !== id)
    this.setState({
      tasks: newTasks
    })
  }

  render () {
    return (
      <React.Fragment>
      	<div className="col-lg-4">
      		<NewTask handleSubmit = {this.handleSubmit}/>
			    <TaskList tasks={this.state.tasks} handleDelete={this.handleDelete}/>
      	</div>
      </React.Fragment>
    );
  }
}

export default LeftSide
