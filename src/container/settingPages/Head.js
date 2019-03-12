import { connect } from 'react-redux';
import BackHeadWithRouter from '../../middleComponents/BackHead';

const mapStateToProps = state => ({
  subtitle: state.currentUser && (`@${state.currentUser.name}`),
});
export default connect(
  mapStateToProps,
)(BackHeadWithRouter);
