import { connect } from 'react-redux';
import Account from '../../Settings/Account';

const mapStateToProps = state => ({
  user: state.currentUser,
});
export default connect(
  mapStateToProps,
)(Account);
