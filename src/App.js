import React, { Component } from 'react';
import Form from './components/Form';
import Post from './components/Post';
class App extends Component {
  constructor() {
    super();
    
    this.state = {
      posts: [{
        id: 1,
        name: "John Doe",
        text: "This is an example post."
      }]
    };
  }

  getNewPost(author, body) {
    this.addComment(author, body);
  }

  addComment(name, text) {
    const post = {
      id: this.state.posts.length + 1,
      name,
      text
    };
    console.log(post)
    this.setState({ post: this.state.posts.push(post)});
  }

  getPosts() {    
    return this.state.posts.map((posts) => { 
      return (
        <Post 
          name={posts.name} 
          text={posts.text} 
          key={posts.id}
        />
      ); 
    });
  }

  render() {
    const posts = this.getPosts();
    return (
      <div className="App">
        <Form 
          newPost={this.getNewPost.bind(this)}
        />
        <div>
          {posts}
        </div>
      </div>
    );
  }
}
export default App;