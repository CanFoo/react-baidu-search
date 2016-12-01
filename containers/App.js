import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Search from '../components/Search'
import * as CounterActions from '../store/actions'

function mapStateToProps(state) {
	return {
		searchLists: state.searchLists
	}
}

function mapDispatchToProps(dispatch) {
  	return bindActionCreators(CounterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)



