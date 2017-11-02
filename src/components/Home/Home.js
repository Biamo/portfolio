import React from 'react'
import './Home.css'
import Typist from 'react-typist';

const Home = () => (
<div class="fullscreen-bg">
  <div class="video-background">
    <div class="video-foreground">
      <iframe title="back-video" src="https://www.youtube.com/embed/videoseries?list=PLtQt647Xg_xFC8AfXw2TYdgpILqjOFqHy&&autoplay=1&loop=1&amp;controls=0&amp;showinfo=0?ecver=2" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
  <div id="vidtop-content">
    <div class="vid-info">
      <Typist>
        <p> Hi, My name is Amir. </p>
        <Typist.Delay ms={500} />
        <br />
        <p> I'm a fullstack developer </p>
        <Typist.Delay ms={500} />
        <br />
        <ul>
          <li>6+ years of experience in software design and development in different environments as a Full-Stack Developer.</li>
          <li>6+ years as C# programmer, expert at coding, debugging, refactoring and optimizing.</li>
          <li>3 years as Ruby programmer, expert at coding, debugging, refactoring and optimizing.</li>
          <li>3 years as Modern Javascript developer, expert at coding, debugging, refactoring and optimizing.</li>
          <li>Good at high-performance, high-availability, high-scalability system architecture design.</li>
          <li>Experienced in development management, familiar with methodologies and relative tools.</li>
          <li>Experienced with Big data processing and familiar with relative tools.</li>
          <li>Experienced with distributed structures, unit testing (TDD), auto deployment.</li>
          <li>Responsible person with good communication and collaboration capability.</li>
        </ul>
      </Typist>
    </div>
  </div>
</div>
)

export default Home
