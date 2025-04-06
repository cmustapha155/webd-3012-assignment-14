import React from 'react';
import logo from './logo-crop.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" alt="logo of caleb" src={logo} />
        <nav>
          <ul>
            <li>Basic Information</li>
            <li>Work</li>
            <li>Skills</li>
            <li>Resources</li>
            <li>Developer Setup</li>
          </ul>
        </nav>
      </header>

      {/* <main>
        <p>main</p>
      </main>

      <footer>
        <p>footer</p>
      </footer> */}

      {/* DEFAULT STUFF */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
