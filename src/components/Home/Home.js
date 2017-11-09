import './Home.scss'
import Typist from 'react-typist';

import React from 'react';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
            <div className="home-content">
    <div className="home-info">
      <Typist>
        <span>Hi, My name is <b>Amir</b>.</span>
      </Typist>
      <Typist>
        <Typist.Delay ms={5000}/>
        <span>I'm a developer</span>
      </Typist>
    </div>
  </div>
    );
  }
}


