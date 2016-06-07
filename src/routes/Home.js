import React from 'react';
import {Link} from 'react-router';

export default class Home extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div className="Home">
        <h1>React facilito pasa y firma</h1>
        <Link to="/sign" > Firma ahora! </Link>
      </div>
    )
  }

}

