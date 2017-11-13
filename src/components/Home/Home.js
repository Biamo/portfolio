import './Home.css'
import Typist from 'react-typist';

import React from 'react';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let cursor ={
          show: true,
          blink: true,
          element: '|',
          hideWhenDone: true,
          hideWhenDoneDelay: 1000,
    }
    return (
            <div className="home-content">
    <div className="home-info">
      <Typist className="greeting" cursor={cursor}>
        <span>Hi, My name is <b>Amir</b>.</span>
      </Typist>
      <Typist cursor={cursor}>
        <Typist.Delay ms={5000}/>
        <span>I'm a Developer</span>
        <Typist.Backspace count={9} delay={400} />
        <span>UI Developer</span>
        <Typist.Backspace count={12} delay={200} />
        <span>Backend Developer</span>
        <Typist.Backspace count={17} delay={200} />
        <span>Full stack Developer</span>
        <span></span>
      </Typist>
    </div>
  </div>
    );
  }
}


