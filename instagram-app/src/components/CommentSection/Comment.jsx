import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../Icons/Icon';

const CommentIcon = styled.div`
  display: none;
  &:hover svg {
    fill: #fd4a4a;
  }
`;

const Username = styled.span`
    font-size: 1rem;
    font-weight: 500;
    margin-right: 10px;
`;
const Text = styled.span`
`;

const CommentContainer = styled.div`
  margin-top: 3px;
  cursor: pointer;
  display: flex;
  align-content: center;
  &:hover > div {
    display: inline;
    & > div {
      display: inline-block;
    }
  }
`;

const Comment = ({ username, text, id, deleteComment, postId }) => {
  return (
    <CommentContainer onDoubleClick={() => deleteComment(id, postId)}>
      <Username>{username}</Username>
      <Text>{text}</Text>
      <CommentIcon data-key={id} onClick={() => deleteComment(id, postId)}>
        <Icon
          icon="delete"
          padding="0px"
          margin="0 0 0 10px"
          fill="#2a2a2a"
          viewBox="0 0 550 700"
          width="1rem"
        />
      </CommentIcon>
    </CommentContainer>
  );
};

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string,
  postId: PropTypes.string,
  deleteComment: PropTypes.func
};
export default Comment;
