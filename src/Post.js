import React from 'react';
import './Post.css';
import Avatar from "@material-ui/core/Avatar";
function Post({username, imageUrl}) {
  return (
    <div className="post">
    <div className="post_header">
    <Avatar
     className='post_avatar'
     alt={username}
     src="/static/images/avatar/1.jpg"
     />
     <h3>{username}</h3>
    </div>

       <img className="post_image" src={imageUrl}
       alt=""></img>
       <h4 className="post_text"><strong>{username}</strong>: Caption</h4>
    </div>
  );
}

export default Post;
