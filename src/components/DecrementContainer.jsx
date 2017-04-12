import { connect } from 'react-redux';
import Decrement from './Decrement'

function mapDispatchToProps(dispatch) {
  return {
    decrement: amount => dispatch({ type: 'DECREMENT' }),
  }
}

export default connect(undefined, mapDispatchToProps)(Decrement)

