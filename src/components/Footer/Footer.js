import React from 'react';
import './footer.css'

export default class Footer extends React.Component {
  
  render() {
    return (
       <footer className="footer">
        <div class="bar">
            <div class="bar-wrap">
                <ul class="links">
                    <li><a href="https://github.com/bidva">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/amir-bidva-854b7a75/">Linkedin</a></li>
                    <li><a href="https://github.com/Biamo/portfolio">Source Code</a></li>
                </ul>
                <div class="clear"></div>
                <div class="copyright">&copy;  2017 All Rights Reserved</div>
            </div>
        </div>
    </footer>
    );
  }
}
