import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import './CommentSection.css';

const CommentSection = ({ comments, deleteComment, postId }) => {
  return (
    <div className="comments">
      {comments.map(comment => (
        <Comment key={comment.text}
        id={comment.text+comment.username}
        deleteComment={deleteComment}
          postId={postId}
        {...comment} />
      ))}
    </div>
  );
};
CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
  deleteComment: PropTypes.func,
  postId: PropTypes.string
}
export default CommentSection;
