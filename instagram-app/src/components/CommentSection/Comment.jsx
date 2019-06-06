import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ username, text }) => {
  return (
    <div>
      <span className="username">{username}</span>
      <span className="text">{text}</span>
    </div>
  );
};

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
export default Comment;
