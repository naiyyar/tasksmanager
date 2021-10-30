import React from "react"
import PropTypes from "prop-types"
import Header from '../shared/Header'
import LeftSide from './LeftSide'
import Middle from './Middle'
import RightSide from './RightSide'

class Index extends React.Component {
  render () {
    return (
      <React.Fragment>
      	<div className="row">
	        <LeftSide tasks={this.props.pending} />
	        <Middle tasks={this.props.started}/>
	        <RightSide tasks={this.props.completed} />
	      </div>
      </React.Fragment>
    );
  }
}

Index.propTypes = {
  greeting: PropTypes.string
};
export default Index
