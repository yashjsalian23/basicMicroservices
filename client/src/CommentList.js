import React from 'react';

export default ({ comments }) => {
  
  let content;
  const renderedComments = comments.map(comment => {
    
    if(comment.status === 'approved'){
      content = comment.content;
    }

    if(comment.status === 'rejected'){
      content = 'This comment is rejected';
    }

    if(comment.status === 'pending'){
      content = 'This comment is awaiting moderation';
    }
    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};
