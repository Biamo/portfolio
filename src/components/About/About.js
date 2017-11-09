import React, { Component } from 'react';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';

export default class About extends Component {
    constructor(props) {
    super(props);
    }

    render() {
    	return (
    		<div className="about-container">
    	<Fade key="s1">{'6+ years of experience in software design and development in different environments as a Full-Stack Developer.'}</Fade>
        <Flip key="s2">{'6+ years as C# programmer, expert at coding, debugging, refactoring and optimizing.'}</Flip>
        <Rotate key="s3">{'3 years as Ruby programmer, expert at coding, debugging, refactoring and optimizing.'}</Rotate>
        <Flip key="s4">{'3 years as Modern Javascript developer, expert at coding, debugging, refactoring and optimizing.'}</Flip>
        <Fade key="s5">{'Good at high-performance, high-availability, high-scalability system architecture design.'}</Fade>
        <Rotate key="s6">{'Experienced in development management, familiar with methodologies and relative tools.'}</Rotate>
        <Flip key="s7">{'Experienced with Big data processing and familiar with relative tools.'}</Flip>
        <Flip key="s8">{'Experienced with distributed structures, unit testing (TDD), auto deployment.'}</Flip>
        <Rotate key="s9">{'Responsible person with good communication and collaboration capability.'}</Rotate>
    		</div>
    	);
    }
}