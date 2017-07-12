// Middleware (to separate the logic, could be a dependency)

export class JobApi {

	static getJob(id) {
		return fetch('/mock/job/' + id)
			.then(response => response.json())
			.then(json => json)
			.catch(error => console.log('parsing failed', error))
	}

	static getJobs() {
		return fetch('/mock/jobs/')
			.then(response => response.json())
			.then(json => json)
			.catch(error => console.log('parsing failed', error))
	}
}

