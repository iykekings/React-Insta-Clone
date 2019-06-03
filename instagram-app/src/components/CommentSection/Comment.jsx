import React from 'react'

const Comment = ({username, text}) => {
    return (
        <div>
            <span className="username">
                {username}
            </span>
            <span className="text">{text}</span>
        </div>
    )
}

export default Comment;
