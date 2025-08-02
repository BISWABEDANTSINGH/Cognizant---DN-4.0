import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        const postList = data.map(item => new Post(item.id, item.title, item.body));
        this.setState({ posts: postList });
      })
      .catch(error => {
        throw error; 
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h1>Blog Posts</h1>
        {
          this.state.posts.map(post => (
            <div key={post.id} style={{ marginBottom: '20px' }}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))
        }
      </div>
    );
  }

  componentDidCatch(error, info) {
    alert('An error occurred while loading posts: ' + error);
    console.error("Error info:", info);
  }
}

export default Posts;
