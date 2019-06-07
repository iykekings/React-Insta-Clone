import React from 'react';
import styled from 'styled-components';
import Comment from './Comment';
import PropTypes from 'prop-types';

const Comments = styled.div``;

const CommentSection = ({ comments, deleteComment, postId }) => {
  return (
    <Comments>
      {comments.map(comment => (
        <Comment
          key={comment.text}
          id={comment.text + comment.username}
          deleteComment={deleteComment}
          postId={postId}
          {...comment}
        />
      ))}
    </Comments>
  );
};
CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
  deleteComment: PropTypes.func,
  postId: PropTypes.string
};
export default CommentSection;
