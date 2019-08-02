import React from 'react';

const Post = ({match, location}) => {
  console.log(match);
  return (
    <div>
      <div>
        Post {match.params.id}
      </div>
      <br/>
      <div>:: Post Page ::</div>
      <div><b>location.pathname : </b>{location.pathname}</div>
      <div><b>match.path : </b>{match.path}</div>
      <div><b>match.url : </b>{match.url}</div>
    </div>
  );
};

export default Post;