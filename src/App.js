import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       
        <div className="soon">
          <h1 id="myName">I'm Flora</h1>
          <p id="soon">Web developer - coming soon</p>
        </div>
        <div className="social">
          <p></p>
        </div>
        {/* <div id="job">
          <h2 id="jobTitle">Web developer</h2>
          <p id="jobDescription">I'm a fullstack javascript developer, working with Reactjs / React Native / Nodejs.</p>
        </div>

        <div className="myProjects">
          <h3 className="myProjects">My Projects:</h3>
            <p>Lucky Bastards - blogging project using ejs and Node</p>
            <p>TV POP web ver. - made to practice using a movie database API with React</p>
            <p>Shared Bikes - practive using google maps tools with React Native</p>         
            <p>TV POP mobile ver. - TV shows listing mobile app using a movie database API with React Native</p>
            <p>Parcel App - B2B mobile app helping with parcel delivery management with React Native</p>          
        </div> */}
        <div id="copyright">© Flora Marteau, all rights reserved</div>
      </div>
    );
  }
}

export default App;
