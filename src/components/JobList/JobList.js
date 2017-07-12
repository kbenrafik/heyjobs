import React, { Component } from 'react'
import { connect } from 'react-redux'
import JobDetail from '../JobDetail'

const renderJobs = jobs => {
	if (jobs && jobs.length) {
		return jobs.map(job =>
			<JobDetail key={job.id} hasLinkMoreDetail={true} {...job} />);
	}

	return <p>there is no jobs TODO</p>;
}

class JobList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log('list jobs', this.props.jobs);
		return (
			<div className="JobList__container">
				{renderJobs(this.props.jobs)}
			</div>
		);
	}
}

JobList.defaultProps = {
	jobs: [{
		id: 1,
		title: 'title 1',
		description: 'desc 1',
		company: 'heyjobs'
	}, {
		id: 2,
		title: 'title 2',
		description: 'desc 2',
		company: 'coqtail'
	}],
};

const mapStateToProps = state => {
  return {
    jobs: state.jobs
  }
}

export default connect(
    mapStateToProps
  )(JobList);