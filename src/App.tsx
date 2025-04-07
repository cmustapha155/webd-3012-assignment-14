import React from 'react';
import logo from './logo-crop.png';
import bannerImage from './tech-space-white.png'
import './App.css';
import { HeroImage } from 'ui-garden-f';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" alt="logo depicting caleb" src={logo} />
        <nav>
          <ul>
            <li><a href="#about">About/Basic Information</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#dev-setup">Developer Setup</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <HeroImage id="hero-image" heading="Caleb Mustapha" subheading="FULL STACK WEB DEVELOPER" buttonText = "Learn More" imageAlt="banner image" imageSrc={bannerImage}></HeroImage>

        <section id="about">
          <h2>About</h2>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam unde beatae sequi ab sint nesciunt. Sunt esse voluptatem quos, autem ipsum nobis nisi ab, sit, debitis labore iste odit nemo.</p>
        </section>

        <section id="work">
          <h2>Work</h2>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam unde beatae sequi ab sint nesciunt. Sunt esse voluptatem quos, autem ipsum nobis nisi ab, sit, debitis labore iste odit nemo.</p>
        </section>

        <section id="skills">
          <h2>Skills</h2>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam unde beatae sequi ab sint nesciunt. Sunt esse voluptatem quos, autem ipsum nobis nisi ab, sit, debitis labore iste odit nemo.</p>
        </section>

        <section id="resources">
          <h2>Resources</h2>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam unde beatae sequi ab sint nesciunt. Sunt esse voluptatem quos, autem ipsum nobis nisi ab, sit, debitis labore iste odit nemo.</p>
        </section>

        <section id="dev-setup">
          <h2>Developer Setup</h2>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam unde beatae sequi ab sint nesciunt. Sunt esse voluptatem quos, autem ipsum nobis nisi ab, sit, debitis labore iste odit nemo.</p>
        </section>
      </main>

      <footer>
        <p>footer</p>
      </footer>

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
