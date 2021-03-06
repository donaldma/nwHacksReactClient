import { FETCH_COURSES } from '../actions';
import _ from 'lodash';


export default function(state = null, action) {
  switch(action.type) {
    case FETCH_COURSES:
      return action.payload.data
    default:
      return state;
  }
}