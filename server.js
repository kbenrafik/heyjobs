'use strict';
const express = require('express');
const app = require('express')();
const path = require('path');
const jobsContainer = require('./data/jobs.json');

app.use('/', express.static(path.join(__dirname, 'build')))

/**
 * GET /jobs
 * 
 * Return the list of jobs with status code 200.
 */
app.get('/mock/jobs', (req, res) => {
	return res.status(200).json(jobsContainer);
});

/**
 * Get /job/:id
 * 
 * id: Number
 * 
 * Return the job for the given id.
 * 
 * If found return status code 200 and the resource.
 * If not found return status code 404.
 * If id is not valid number return status code 400.
 */
app.get('/mock/job/:id', (req, res) => {
	const id = parseInt(req.params.id, 10);

	if (!Number.isNaN(id)) {
		const job = jobsContainer.jobs.find((item) => item.id === id);

		if (job !== null) {
			return res.status(200).json({
				job,
			});
		} else {
			return res.status(404).json({
				message: 'Not found.',
			});
		}
	} else {
		return res.status(400).json({
			message: 'Bad request.',
		});
	}
});

app.listen(3333, () => {
	process.stdout.write('the server is available on http://localhost:3333/\n');
});
