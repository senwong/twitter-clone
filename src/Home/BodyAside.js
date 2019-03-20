import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRelatedUsers } from '../Api';
import TitleBar from '../middleComponents/TitleBar';
import RelatedUsersListWithoutDesc from '../Related/RelatedUsersListWithoutDesc';
import { setup, show } from '../actionCreators/modal';
import ShowMore from '../BaseComponents/ShowMore';
import GlobalTrends from '../Explore/GlobalTrends';

const Aside = styled.aside`
  width: 360px;
  margin: 0 20px;
  align-self: flex-start;
`;
const RelatedUsersContainer = styled.div`
  margin-bottom: 10px;
  background-color: rgb(255, 255, 255);
`;
function BodyAside({ setModal, showModal }) {
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
    <Aside>
      <RelatedUsersContainer>
        <TitleBar title="推荐关注" rear />
        <RelatedUsersListWithoutDesc users={relatedUsers} />
        <ShowMore href="/related" />
      </RelatedUsersContainer>
      <GlobalTrends />
    </Aside>
  );
}
BodyAside.propTypes = {
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
)(BodyAside);
