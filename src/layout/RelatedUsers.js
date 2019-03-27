import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRelatedUsers } from '../Api';
import { setup, show } from '../actionCreators/modal';
import TitleBar from '../middleComponents/TitleBar';
import RelatedUsersListWithoutDesc from '../Related/RelatedUsersListWithoutDesc';
import ShowMore from '../BaseComponents/ShowMore';
import { whiteBackgroud } from '../themes';

const Container = styled.div`
  ${whiteBackgroud}
`;
function RelatedUsers({ setModal, showModal }) {
  const [relatedUsers, setRelatedUsers] = useState([]);
  useEffect(() => {
    const cancelablePromise = getRelatedUsers(3);
    cancelablePromise.promise
      .then(
        res => setRelatedUsers(res.data),
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
    <Container>
      <TitleBar title="推荐关注" rear />
      <RelatedUsersListWithoutDesc users={relatedUsers} />
      <ShowMore href="/related" />
    </Container>
  );
}
RelatedUsers.propTypes = {
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
)(RelatedUsers);
