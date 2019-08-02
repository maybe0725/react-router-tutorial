import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Post } from 'pages';

const Posts = ({match, location}) => {
  return (
    <div>
      <h2>Post List</h2>
      <ul>
        <li><Link to={`${match.url}/1`}>Post #1</Link></li>
        <li><Link to={`${match.url}/2`}>Post #2</Link></li>
        <li><Link to={`${match.url}/3`}>Post #3</Link></li>
        <li><Link to={`${match.url}/4`}>Post #4</Link></li>
      </ul>
      <Route exact path={match.url} render={()=>(<h3>Please select any post</h3>)}/>
      <div>:: Posts Page ::</div>
      <div><b>location.pathname : </b>{location.pathname}</div>
      <div><b>match.path : </b>{match.path}</div>
      <div><b>match.url : </b>{match.url}</div>
      <br/>
      <Route path={`${match.url}/:id`} component={Post}/>
    </div>
  );
};

export default Posts;