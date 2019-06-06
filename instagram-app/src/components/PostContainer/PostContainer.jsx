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
  addComment
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
        <CommentSection comments={comments} />
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
  id: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  timestamp: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  liked: PropTypes.bool.isRequired,
  toggleLike: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired
};
export default PostContainer;
