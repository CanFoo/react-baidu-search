import {SHOW_MESSAGE_SUCESS} from '../../types'
import initState from './searchInitState'

export default function search(state=initState, action) {
	switch(action.type) {
		case SHOW_MESSAGE_SUCESS:
		  	return action.lists
		default:
	  		return state
	}
}


