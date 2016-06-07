import React from 'react';
import Comment from './Comment'

export default class CommentList extends React.Component{
  constructor(){
    super();
  }

  render(){
    let all_comments = this.props.data.map((comment)=>{
      return (<Comment key={comment.id} author={comment.author} text={comment.text}/>)
    })
    return( 
      <div className="CommentList">
        {all_comments}
      </div> 
      )
  }

}