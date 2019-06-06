import React from 'react';
import moment from 'moment';
import Icon from '../Icons/Icon';
import PropTypes from 'prop-types';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = ({
  id,
  username,
  thumbnailUrl,
  imageUrl,
  likes,
  timestamp,
  comments,
  liked,
  toggleLike,
  addComment,
  deleteComment
}) => {
  const getTime = str => moment(str, 'MMMM Do YYYY, h:mm:ss a').fromNow();
  return (
    <article className="post-container">
      <div className="p-header">
        <div className="p-thumbnail">
          <img src={thumbnailUrl} alt="thumbnail" />
        </div>
        <span className="p-username">{username}</span>
      </div>
      <div className="p-img">
        <img src={imageUrl} alt="props background" />
      </div>
      <div className="p-meta">
        <div className="p-icons">
          <Icon
            id={id}
            icon="love"
            fill={!!liked ? 'deeppink' : '#2a2a2a'}
            toggleLike={() => toggleLike(id)}
          />
          <Icon icon="comment" fill="#2a2a2a" />
        </div>
        <p className="p-likes">{likes} likes</p>
        <CommentSection comments={comments} deleteComment={deleteComment}
        postId={id} />
        <p className="p-timestamp">{getTime(timestamp)}</p>
        <form className="comment-form" onSubmit={(e, id) => addComment(e, id)}>
          <input
            type="text"
            name="comment"
            id={id}
            placeholder="Add a comment..."
          />
          <input type="submit" value="..." />
        </form>
      </div>
    </article>
  );
};

PostContainer.propTypes = {
  id: PropTypes.string,
  username: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  imageUrl: PropTypes.string,
  likes: PropTypes.number,
  timestamp: PropTypes.string,
  comments: PropTypes.arrayOf(PropTypes.object),
  liked: PropTypes.bool,
  toggleLike: PropTypes.func,
  addComment: PropTypes.func,
  deleteComment: PropTypes.func
};
export default PostContainer;
