import React from 'react';

class Form extends React.Component {
  formSubmission = e => {
    e.preventDefault();
    let name = this._name;
    let text = this._text;

    this.props.newPost(name.value, text.value);//calls a function in app.js with the name and text values
    
    this._name.value = ""; //clears the input tag
    this._text.value = "";
  };

  render() {
    // const posts = this.getPosts();
    return (
      <form className="postForm" onSubmit={this.formSubmission.bind(this)}>
        <input type="text" placeholder="Name:" required ref={(input) => this._name = input}/>
        
        <textarea placeholder="What's New:" required ref={(textarea) => this._text = textarea}/>

        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default Form;
        