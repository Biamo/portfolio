import React from 'react'
import './Home.css'
import Typist from 'react-typist';
// import Iframe from '../Shared/Iframe/Iframe'

const Home = () => (
<div class="fullscreen-bg">
  <div class="video-background">
    <div class="video-foreground">
       {// <iframe title="back-video" src="https://www.youtube.com/embed/videoseries?list=PLtQt647Xg_xFC8AfXw2TYdgpILqjOFqHy&autoplay=1&loop=1&controls=0&showinfo=0?ecver=2" frameborder="0" allowfullscreen></iframe>
     }
    </div>
  </div>
  <div id="vidtop-content">
    <div class="vid-info">
      <Typist>
        <h1> Hi, My name is <b>Amir</b>. </h1>
        <Typist.Delay ms={500} />
        <br />
        <p> {"I'm a fullstack developer"} </p>
        <Typist.Delay ms={500} />
        <br />
          <span>{'6+ years of experience in software design and development in different environments as a Full-Stack Developer.'}</span>
          <Typist.Backspace count={110} delay={200} />
          <span>{'6+ years as C# programmer, expert at coding, debugging, refactoring and optimizing.'}</span>
          <Typist.Backspace count={83} delay={200} />
          <span>{'3 years as Ruby programmer, expert at coding, debugging, refactoring and optimizing.'}</span>
          <Typist.Backspace count={84} delay={200} />
          <span>{'3 years as Modern Javascript developer, expert at coding, debugging, refactoring and optimizing.'}</span>
          <Typist.Backspace count={96} delay={200} />
          <span>{'Good at high-performance, high-availability, high-scalability system architecture design.'}</span>
          <Typist.Backspace count={89} delay={200} />
          <span>{'Experienced in development management, familiar with methodologies and relative tools.'}</span>
          <Typist.Backspace count={86} delay={200} />
          <span>{'Experienced with Big data processing and familiar with relative tools.'}</span>
          <Typist.Backspace count={70} delay={200} />
          <span>{'Experienced with distributed structures, unit testing (TDD), auto deployment.'}</span>
          <Typist.Backspace count={77} delay={200} />
          <span>{'Responsible person with good communication and collaboration capability.'}</span>
          <Typist.Backspace count={72} delay={200} />
      </Typist>
    </div>
  </div>
</div>
)

export default Home
