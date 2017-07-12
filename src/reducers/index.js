import { combineReducers } from 'redux'

import { LOAD_JOBS, LOAD_JOB } from '../actions'

// Reducer
const jobs = (state = [], action) => {
  switch (action.type) {
    case LOAD_JOBS:
      return action.jobs;
    default:
      return state
  }
}

const job = (state = [], action) => {
  switch (action.type) {
    case LOAD_JOB:
      return action.job;
    default:
      return state
  }
}

export const jobApp = combineReducers({
  jobs,
  job
})
