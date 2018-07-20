import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import './styles.scss';

const Post = props => (
    <div className="posts">
        <div className="post">
            <Header name={props.data.name} time={props.data.time} avatar={props.data.avatar} />

            <div className="content">{props.data.content}</div>
        </div>
    </div>
);

Post.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }).isRequired,
};

export default Post;
