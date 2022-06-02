import React from 'react';
import OnePost from './OnePost';

const Feed = (props) => {
    return (
      
        <div className="feed">
          saraa
        <ul>
          {props.all.map((e,i)=>{return <OnePost oneP={e} handleClick={props.handleClick} key={i} />}) } 
        </ul>
      </div>
    );
};

export default Feed;