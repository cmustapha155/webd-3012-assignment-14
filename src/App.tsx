import React from 'react';
import './App.css';
import logo from './img/logo-crop.png';
import bannerImage from './img/tech-space-white.png';
import cmsImage from './img/content-management-system.png';
import ajaxImage from './img/ajax-open-data.png';
import mockImage from './img/develop-from-mockup.png';
import infoImage from './img/informational-website.png';
import { HeroImage } from 'ui-garden-f';
import { Card } from 'ui-garden-f';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" alt="logo depicting caleb" src={logo} />
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
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

          <p>Hi, I'm Caleb, a web developer here in Winnipeg. I enjoy building things for the web, focusing on creating sites and applications that are both functional and easy to use. I work with various technologies to bring ideas to life through code, and I'm always looking to expand my skills in this field.</p>
        </section>

        <h2 id="work">Work</h2>

        <section id="projects">
          <Card align="center" heading="Lock In Season" description="A blog content management system featuring categorization and image uploads with dynamic resizing. (HTML, CSS, PHP, MySQL)" imageSrc={cmsImage} textColor="black" accentColor="#93c5c3"></Card>
          <Card align="center" heading="Winnipeg Road Repair Portal" description="An asynchronous search tool that allows for querying of Winnipeg road repair data, including sorting and filtering. (HTML, CSS, Javascript, Ajax)" imageSrc={ajaxImage} textColor="black" accentColor="#93c5c3"></Card>
          <Card align="center" heading="Develop From Mockup" description="The implementation of a detailed mockup as a functional webpage. (HTML, CSS)" imageSrc={mockImage} textColor="black" accentColor="#93c5c3"></Card>
          <Card align="center" heading="Communication Strategies Website" description="Static informational website providing information on communication for innovation. (HTML, CSS)" imageSrc={infoImage} textColor="black" accentColor="#93c5c3"></Card>
        </section>


        <section id="skills">
          <h2>Skills</h2>

          <p>My core skills include HTML, CSS, and JavaScript, with expertise in modern frameworks like React. I focus on building responsive layouts, interactive components, and ensuring optimal performance for a seamless user journey.</p>

          <p>Languages/Frameworks:</p>
          <ul>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>React JS</li>
            <li>TypeScript</li>

          </ul>
        </section>

        <section id="resources">
          <h2>Resources</h2>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam unde beatae sequi ab sint nesciunt. Sunt esse voluptatem quos, autem ipsum nobis nisi ab, sit, debitis labore iste odit nemo.</p>
        </section>

        <section id="dev-setup">
          <h2>Developer Setup</h2>

          <ul>
            <li>Laptop: Asus VivoBook M415DA</li>
            <li>Terminal: Ubuntu 20.04.6</li>
            <li>Preferred Editor font: Fira Code</li>
          </ul>
        </section>
      </main>

      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
}

export default App;
