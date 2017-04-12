import { connect } from 'react-redux';
import Increment from './Increment'

function mapStateToProps(state) {
  return { state: state.counter }
}

function mapDispatchToProps(dispatch) {
  return {
    increment: amount => dispatch({ type: 'INCREMENT' }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Increment)
