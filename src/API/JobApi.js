// Middleware (to separate the logic, could be a dependency)

export class JobApi {

	/**
	 * @desc get job
	 * @param {*} id 
	 * @return {Promise} then job object
	 */
	static getJob(id) {
		return fetch('/mock/job/' + id)
			.then(response => response.json())
			.then(json => json)
			.catch(error => console.log('parsing failed', error))
	}

	/**
	 * @desc get list of job
	 * @return {Promise} then list of job
	 */
	static getJobs() {
		return fetch('/mock/jobs/')
			.then(response => response.json())
			.then(json => json)
			.catch(error => console.log('parsing failed', error))
	}
}

