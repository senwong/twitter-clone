import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setup, show } from '../actionCreators/modal';
import { getRelatedUsers } from '../Api';
import RelatedUsersList from './RelatedUsersList';
import BackHead from '../middleComponents/BackHead';

function Related({ setModal, showModal }) {
  const [users, setUsers] = useState();
  useEffect(() => {
    const cancelablePromise = getRelatedUsers();
    cancelablePromise.promise
      .then(
        res => setUsers(res.data),
        () => {
          setModal({
            title: 'Network error',
            type: 'warning',
            onConfirm: null,
            onCancel: null,
          });
          showModal();
        },
      );
    return () => {
      cancelablePromise.cancel();
    };
  }, []);
  return (
    <div>
      <BackHead title="推荐关注" />
      <RelatedUsersList users={users} />
    </div>
  );
}
Related.propTypes = {
  setModal: PropTypes.func.isRequired,
  showModal: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  setModal: modalConfig => dispatch(setup(modalConfig)),
  showModal: () => dispatch(show()),
});
export default connect(
  null,
  mapDispatchToProps,
)(Related);
