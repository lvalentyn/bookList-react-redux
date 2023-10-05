import actionTypes from './actionTypes.js'
import { getCurrentTime } from '../utils/getCurrentTime.js'

export const addCurrentTime = () => {
  return {
    type: actionTypes.addTime,
    payload: getCurrentTime()
  }
}

export const clearTimes = () => {
  return {
    type: actionTypes.clearTimes
  }
}
