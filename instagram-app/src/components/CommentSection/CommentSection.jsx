import React from 'react';
import Comment from './Comment';

const CommentSection = ({comments}) => {
    return (
        <div className="comments">
            {comments.map(comment => <Comment {...comment} />)}
        </div>
    )
}

export default CommentSection
