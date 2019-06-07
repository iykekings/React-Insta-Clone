import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icons/Icon';
import './Comment.css';

const Comment = ({ username, text, id, deleteComment, postId }) => {
  return (
    <div
      className="comment-container"
      onDoubleClick={() => deleteComment(id, postId)}
    >
      <span className="username">{username}</span>
      <span className="text">{text}</span>
      <div
        className="comment-icon"
        data-key={id}
        onClick={() => deleteComment(id, postId)}
      >
        <Icon icon="delete" fill="#2a2a2a" viewBox="0 0 550 700" width="30px" />
      </div>
    </div>
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
