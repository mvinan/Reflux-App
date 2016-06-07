import React from 'react';
import ReactMixin from 'react-mixin';
import Reflux from 'reflux';
import $ from 'jquery';

import CommentStore from '../stores/CommentStore'
import CommentActions from '../actions/CommentActions'
import CommentBox from '../components/CommentBox'

@ReactMixin.decorate(Reflux.connect(CommentStore, 'comments'))
export default class Sign extends React.Component{
  constructor(){
    super();
  }

  componentDidMount(){
    CommentActions.fetchComments()
  }

  onSubmitSendComment(ev){
    ev.preventDefault();
    var data = $(ev.target).serializeArray();
    let comment = {
      author: data[0].value,
      text: data[1].value,
      id: data[2].value
    }
    CommentActions.sendSign(comment)
  }

  render(){
    if(this.state.comments){
      return(
        <div className="Sign">
          <CommentBox onSubmit={this.onSubmitSendComment.bind(this)} data={this.state.comments}/>
        </div>
      )
    }else{
      return <h1>Loading…</h1>
    }
  }

}
