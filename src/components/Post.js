import React from 'react';
import LikeDislike from './LikeDislike';
import Avatar from './Avatar';
import PostText from './PostText';

import pfp from '../assets/user.png';

function Post(props) {
  const {name, text} = props;
  return (
    <div className="blogPost">
      <Avatar avatarUrl={pfp} name={name}/>
      <PostText text={text}/>
      <LikeDislike/>
    </div>
  )
}

export default Post;