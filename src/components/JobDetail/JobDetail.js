import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const renderLinkMoreDetail = (hasLinkMoreDetail, id) => {
	if (!hasLinkMoreDetail) {
		return null;
	}

	return <Link to={"/job/" + id}>More detail</Link>;
}

class JobDetail extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props.match.params.id);
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
	hasLinkMoreDetail: false
}

export default JobDetail