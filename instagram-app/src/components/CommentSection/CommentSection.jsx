import React from 'react';
import Comment from './Comment';

const CommentSection = ({ comments }) => {
  return (
    <div className="comments">
      {comments.map(comment => (
        <Comment key={comment.username + comment.text} {...comment} />
      ))}
    </div>
  );
};

export default CommentSection;
