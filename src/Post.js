import React from 'react';
import './Post.css';
import Avatar from "@material-ui/core/Avatar";
function Post() {
  return (
    <div className="post">
    <div className="post_header">
    <Avatar
     className='post_avatar'
     alt='Username'
     src="/static/images/avatar/1.jpg"
     />
     <h3>Username</h3>
    </div>

       <img className="post_image" src="https://images.pexels.com/photos/1666012/pexels-photo-1666012.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
       alt=""></img>
       <h4 className="post_text"><strong>Username</strong>: Caption</h4>
    </div>
  );
}

export default Post;
