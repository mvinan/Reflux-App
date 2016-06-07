import React from 'react';
import ReactMixin from 'react-mixin';
import Reflux from 'reflux';

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

  render(){
    console.log(this.state.comments)
    if(this.state.comments){
      return(
        <div className="Sign">
          <CommentBox data={this.state.comments}/>
        </div>
      )
    }else{
      return <h1>Loading…</h1>
    }
  }

}
