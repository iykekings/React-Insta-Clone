import React from 'react';
import Icon from '../Icons/IconPaths';
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = ({username, thumbnailUrl, imageUrl, likes, timestamp, comments}) => {
    return (
        <article className="post-container">
            <div className="p-header">
                <div className="p-thumbnail">
                    <img src={thumbnailUrl} alt="thumbnail"/>
                </div>
                <span className="p-username">{username}</span>
            </div>
            <div className="p-img">
                <img src={imageUrl} alt="Post background"/>
            </div>
            <div className="p-meta">
                <div className="p-icons">
                    <Icon icon="love" fill="#2a2a2a" />
                    <Icon icon="comment" stroke="#2a2a2a" strokewidth="20px" />
                </div>
                <p className="p-likes">{likes} likes</p>
                <CommentSection comments={comments} />
                <p className="p-timestamp">{timestamp}</p>
                <form id="comment-form"><input type="text" name="comment" id="comment" placeholder="Add a comment..."/></form>
            </div>
        </article>
    )
}

export default PostContainer
