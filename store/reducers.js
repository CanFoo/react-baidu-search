import { combineReducers } from 'redux'
import searchLists from './modules/search/searchReducer'

const rootReducer = combineReducers({
  searchLists
})

export default rootReducer