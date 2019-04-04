import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { getRelatedUsers } from '../Api';
import { setup, show } from '../actionCreators/modal';
import TitleBar from '../middleComponents/TitleBar';
import RelatedUsersListWithoutDesc from '../Related/RelatedUsersListWithoutDesc';
import ShowMore from '../BaseComponents/ShowMore';
import { whiteBackground } from '../themes';

const Container = styled.div`
  ${whiteBackground}
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
      <ShowMore href="/twitter-clone/related" />
    </Container>
  );
}
RelatedUsers.propTypes = {
  setModal: func.isRequired,
  showModal: func.isRequired,
};
const mapDispatchToProps = dispatch => ({
  setModal: modalConfig => dispatch(setup(modalConfig)),
  showModal: () => dispatch(show()),
});
export default connect(
  null,
  mapDispatchToProps,
)(RelatedUsers);
