import React, { Component, Fragment } from 'react';
import Header from './global/components/header';
import Post from './global/components/post';
import posts from './data/posts.json';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts,
        };
    }

    render() {
        return (
            <Fragment>
                <Header />

                {this.state.posts.map(post => <Post data={post} key={post.id} />)}
            </Fragment>
        );
    }
}

export default App;
