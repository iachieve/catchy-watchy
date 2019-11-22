import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions.js';
import Signup from './signup';

const mapStateToProps = (state, ownProps) => {
  return {
      errors: state.errors.session}
  };

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(signup(formUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
