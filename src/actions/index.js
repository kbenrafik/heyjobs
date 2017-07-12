
import { JobApi } from '../Api/JobApi'
export const LOAD_JOBS = 'LOAD_JOBS'
export const LOAD_JOB = 'LOAD_JOB'

const loadJobs = jobs => ({
  type: LOAD_JOBS,
  jobs
});

const loadJob = job => ({
  type: LOAD_JOB,
  job
});

export const dispatchLoadJobs = () => {
  return (dispatch) => {
    return JobApi.getJobs()
      .then(response => {
        dispatch(loadJobs(response.jobs))
      }).catch(error => {
        throw (error);
      });
  };
}

export const dispatchLoadJob = id => {
  return (dispatch) => {
    return JobApi.getJob(id)
      .then(response => {
        dispatch(loadJob(response.job))
      }).catch(error => {
        throw (error);
      });
  };
}
