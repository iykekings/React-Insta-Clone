import React from 'react';
import Icon from '../Icons/Icon';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const PostContainer = ({
  username,
  thumbnailUrl,
  imageUrl,
  likes,
  timestamp,
  comments
}) => {
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
          <Icon icon="love" fill="deeppink" />
          <Icon icon="comment" fill="#2a2a2a" />
        </div>
        <p className="p-likes">{likes} likes</p>
        <CommentSection comments={comments} />
        <p className="p-timestamp">{timestamp}</p>
        <form className="comment-form">
          <input
            type="text"
            name="comment"
            id="comment"
            placeholder="Add a comment..."
          />
          <input type="submit" value="..." />
        </form>
      </div>
    </article>
  );
};

export default PostContainer;
