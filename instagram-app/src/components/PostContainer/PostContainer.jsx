import React from 'react';
import moment from 'moment';
import Icon from '../Icons/Icon';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './PostContainer.css';
import CommentSection from '../CommentSection/CommentSection';

const Thumbnail = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
`;

const Username = styled.div`
  margin-left: 1rem;
  font-weight: 500;
  color: #2a2a2a;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
`;
const PostIcons = styled.div`
  display: flex;
`;

const Image = styled.img`
width: 100%;
height: ${props => props.height || "100%"};
object-fit: cover;
`;

const Likes = styled.p`
  font-weight: 500;
  margin-bottom: 5px;
`;
const Timestamp = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin: 10px 0;
  color: gray;
`;

const PostMetaData = styled.div`
  padding: 0 1rem;
`;

const CommentForm = styled.form`
   display: flex;
  padding: 0.5rem 0;
  align-items: center;
  border-top: 1px solid lightgray;
    input {
    border: none;
    background-color: white;
    font-size: 1rem;
    font-weight: 600;
    color: #2a2a2a;
    outline: none;
      &[type='text'] {
      width: 94%;
    }
    &[type='submit'] {
      font-size: 1.2rem;
      padding: 0.5rem;
        &:hover {
        background-color: #eeeeee;
        border-radius: 20px;
      }
    }
  }
`;

const Post = styled.article`
  min-width: 300px;
  max-width: 500px;
  border: 1px lightgrey solid;
  margin-bottom: 3rem;
  box-shadow: 2px 2px 11px #00000026;
  `;

const PostContainer = props => {
  const getTime = str => moment(str, 'MMMM Do YYYY, h:mm:ss a').fromNow();
  return (
    <Post>
      <PostHeader>
        <Thumbnail>
          <Image src={props.thumbnailUrl} alt="thumbnail" />
        </Thumbnail>
        <Username>{props.username}</Username>
      </PostHeader>
      <Image src={props.imageUrl} alt="props background" height="400px"/>
      <PostMetaData>
        <PostIcons>
          <Icon
            id={props.id}
            icon="love"
            fill={!!props.liked ? 'deeppink' : '#2a2a2a'}
            toggleLike={() => props.toggleLike(props.id)}
          />
          <Icon icon="comment" fill="#2a2a2a" />
        </PostIcons>
        <Likes>{props.likes} likes</Likes>
        <CommentSection
        comments={props.comments}
        deleteComment={props.deleteComment}
        postId={props.id} />
        <Timestamp>{getTime(props.timestamp)}</Timestamp>
        <CommentForm onSubmit={(e) => props.addComment(e, props.id)}>
          <input
            type="text"
            name="comment"
            id={props.id}
            placeholder="Add a comment..."
          />
          <input type="submit" value="..." />
        </CommentForm>
      </PostMetaData>
    </Post>
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
