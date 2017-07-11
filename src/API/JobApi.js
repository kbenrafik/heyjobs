// middleware

class JobApi {

	static getJobDetail() {
		return fetch('/mock/job/' + id)
			.then(response => response.json())
			.then(json => json)
			.catch(error => console.log('parsing failed', error))
	}

	static getJobList() {
		return fetch('/mock/jobs/')
			.then(response => response.json())
			.then(json => json)
			.catch(error => console.log('parsing failed', error))
	}
}