'use strict';
const express = require('express');
const app = require('express')();
const path = require('path');
const jobsContainer = require('./jobs.json');
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './src/App'



import { renderToString } from 'react-dom/server'

import configureStore  from './src/store/configureStore'
import dispatchLoadJobs from './src/actions'

app.use('/', express.static(path.join(__dirname, 'build')))
app.use(handleRender)

function handleRender(req, res) {
  // Create a new Redux store instance

  const store = configureStore();

	//store.dispatch(dispatchLoadJobs());
  // Render the component to a string

  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  // Grab the initial state from our Redux store
  const preloadedState = store.getState();

  // Send the rendered page back to the client
  res.send(renderFullPage(html, preloadedState));
}

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Jobs App</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/build/bundle.js"></script>
      </body>
    </html>
    `
}
//import counterApp from './reducers'

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
