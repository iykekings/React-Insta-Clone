import React, { Component } from 'react';
import styled from 'styled-components';
import SearchBar from '../SearchBar/SearchBar';
import Storage from '../../localStorage';
import dummyData from '../../assets/dummy-data';
import PostContainer from './PostContainer';

export default class PostsPage extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            searchValue: '',
            searchResult: [],
            comments: {
                '12347': false,
                 '12345': false,
                 '12346': true
        }
        };
        this.store = new Storage('posts');
    }

    componentDidMount() {
        const itemsInStore = this.store.getAllItems();
        if (itemsInStore.length < 1) {
            this.setState({ posts: dummyData });
        } else {
            this.setState({ posts: itemsInStore });
        }
    }

    componentDidUpdate() {
        this.store.overrideWith(this.state.posts);
    }

    toggleLike = id => {
        const newPosts = this.state.posts.map(post => {
            if (post.id === id) {
                if (post.liked === true) {
                    post.liked = false;
                    --post.likes;
                } else {
                    post.liked = true;
                    ++post.likes;
                }
            }
            return post;
        });
        this.setState({ posts: [...newPosts] });
    };

    runSearch(e) {
        e.preventDefault();
        const result = this.state.posts.filter(post =>
            post.username.toLowerCase().includes(this.state.searchValue.toLowerCase())
        );
        this.setState({ searchResult: result });
    }

    handleSearchInput(val) {
        this.setState({ searchValue: val });
        if (val === '') {
            this.setState({ searchResult: [] });
        }
    }

    addComment = (e, id) => {
        e.preventDefault();
        let input = e.target.querySelector('input[type="text"]');
        const username = JSON.parse(localStorage.getItem('user'))['user']['username'];
        const newPosts = this.state.posts.map(post => {
            if (post.id === id && !!input.value) {
                post.comments.push({ username, text: input.value });
            }
            return post;
        });
        this.setState({ posts: [...newPosts] });
        input.value = '';
    };

    deleteComment = (id, postId) => {
        const newPosts = this.state.posts.map(post => {
            let newPost = [];
            if (post.id === postId) {
                const comments = post['comments'].filter(comment => !(`${comment.text}${comment.username}` === id));
                newPost = {...post, comments}
            } else {
                newPost = post;
            }
            return newPost;
        });
        this.setState({ posts: [...newPosts] });
    };
    toggleCommentForm = (postId) => {
        const comments = this.state.comments;
        comments[postId] = !comments[postId]
        this.setState({comments})
    }

    render() {
        const Posts = styled.div`
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 5vw;
        `;
        const SearchHeader = styled.h1`
            margin-bottom: 2rem;
            color: #2a2a2a;
        `;
        return (
            <>
                <SearchBar
                    runSearch={e => this.runSearch(e)}
                    searchValue={this.state.searchValue}
                    handleSearchInput={(val) => this.handleSearchInput(val)}
                />
                <Posts>
                    {this.state.searchResult.length > 0
                        ? <SearchHeader>Search Results</SearchHeader>
                        : ''}
                    {this.state.searchResult.length > 0
                        ? this.state.searchResult.map(post => (
                            <PostContainer
                                displayCommentForm={this.state.comments[post.id]}
                                deleteComment={this.deleteComment}
                                key={post.username}
                                {...post}
                                addComment={e => this.addComment(e, post.id)}
                                toggleLike={this.toggleLike}
                                toggleCommentForm={this.toggleCommentForm}
                            />
                        ))
                        : this.state.posts.map(post => (
                            <PostContainer
                                displayCommentForm={this.state.comments[post.id]}
                                deleteComment={this.deleteComment}
                                key={post.username}
                                {...post}
                                addComment={e => this.addComment(e, post.id)}
                                toggleLike={() => this.toggleLike(post.id)}
                                toggleCommentForm={this.toggleCommentForm}
                            />
                        ))}
                </Posts>
            </>
        );
    }
}
