import Reflux from 'reflux'
import CommentActions from '../actions/CommentActions'
import io from 'socket.io-client'

let CommentStore = Reflux.createStore({
  listenables: [CommentActions],

  init: function(){
    this.socket = io('http://localhost:3000')
    this.socket.on('data', (data) => {
        this.trigger(data)
      })
  },

  fetchComments: function(){
    this.socket.emit('read')
  }

})

export default CommentStore;