import React, { Component } from 'react';

const fetch = require('node-fetch');
import PostLoader from '../components/PostLoader';




class Home extends Component {
  static async getInitialProps() {
    const posts = await fetch(`${process.env.MAIN_URL}posts`);
    return { posts }
  }
  render() {
    console.log(this.props);
    const { posts } = this.props;
    if(posts.length) {
      return <h1>Loaded</h1>;
    }
    return <PostLoader />;
  }
}

export default Home;