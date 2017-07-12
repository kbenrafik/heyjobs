import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {dispatchLoadJob} from '../../actions'
import configureStore from '../../store/configureStore'
import { connect } from 'react-redux'

const renderLinkMoreDetail = (hasLinkMoreDetail, id) => {
	if (!hasLinkMoreDetail) {
		return null;
	}

	return <Link to={"/job/" + id}>More detail</Link>;
}

// I will replaced by another solution later
const isDetailView = component =>
	component.props.match && component.props.match.params.id;

class JobDetail extends Component {
	constructor(props) {
		super(props);

		// this.props.loadJob(1);
	}

	
	componentWillMount () {
		if(isDetailView(this)){
			console.log('detail dispatchLoadJob');
			const { loadJob } = this.props;
			loadJob(this.props.match.params.id);
		}else {
			console.log('list');
		}
}


	render() {
		return (
			<div className="JobDetail__container">
				<h3>{this.props.title}</h3>
				<p>{this.props.description}</p>
				<span>{this.props.company}</span>
				{renderLinkMoreDetail(this.props.hasLinkMoreDetail, this.props.id)}
			</div>
		);
	}
}

JobDetail.defaultProps = {
	hasLinkMoreDetail: false,
	job: {title: 'khalid'},
	title: 'ba2'
}

const mapStateToProps = state => {
  return {
    ...state.job
  }
}

const mapDispatchToProps = dispatch => ({
  loadJob: (id) => dispatch(dispatchLoadJob(id)),
});

export default connect(
		mapStateToProps,
		mapDispatchToProps
  )(JobDetail);