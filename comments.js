//Comment view

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getComments } from '../actions/comments';
import { getPosts } from '../actions/posts';
import { getCategories } from '../actions/categories';
import { deleteComment } from '../actions/comments';
import { voteComment } from '../actions/comments';
import { votePost } from '../actions/posts';
import { addComment } from '../actions/comments';
import { editComment } from '../actions/comments';
import { editPost } from '../actions/posts';
import { deletePost } from '../actions/posts';
import { changeSort } from '../actions/sort';
import Comment from './Comment';
import { Button, Modal, Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { FaSort, FaPlus } from 'react-icons/fa';

class Comments extends React.Component {
  state = {
    show: false,
    body: '',
  };
}