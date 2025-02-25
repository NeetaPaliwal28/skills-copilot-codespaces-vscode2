//Comment view

import React from 'react';
import { Link } from 'react-router-dom';

export default class Comment extends React.Component {
  render() {
    return (
      <div>
        <div className="comment">
          <Link to={`/users/${this.props.comment.user.id}`}>
            <h2>{this.props.comment.user.username}</h2>
          </Link>
          <p>{this.props.comment.content}</p>
        </div>
      </div>
    );
  }
}