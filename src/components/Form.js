import React from 'react';
import Post from './Post';

class Form extends React.Component {
  constructor() {
    super();
    
    let form = this.state = {
      posts: [{
        id: 1,
        name: "John Doe",
        text: "This is an example post."
      }]
    };
  }

  formSubmission = e => {
    e.preventDefault();
    let name = this._name;
    let text = this._text;
    this.addComment(name.value, text.value);
    console.log(this.state.posts)
  };
  
  addComment(name, text) {
    const post = {
      id: this.state.posts.length + 1,
      name,
      text
    };
    console.log(post)
    this.setState({ post: this.state.posts.push(post)}); // *new array references help React stay fast, so concat works better than push here.
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
      <form onSubmit={this.formSubmission.bind(this)}>
        <fieldset>
          <input type="text" placeholder="Name" required ref={(input) => this._name = input}/>
          
          <input type="text" placeholder="What's New" required ref={(input) => this._text = input}/>

          <button type="submit">Submit</button>
        </fieldset>
        <div>{posts}</div>
      </form>
    );
  }
}

export default {
  Form,
  form
};

        