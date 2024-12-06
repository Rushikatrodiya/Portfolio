import React from 'react';
import './MyWork.css';

function MyWork() {
  return (
    <div id='work' className="my-work">
      <h1 className="my-work__title">My Work</h1>

      {/* Projects Section */}
      <section className="my-work__section projects">
        <h2 className="projects__title">Projects</h2>

        <div className="projects__item project">
          <h3 className="project__title">Manage Your Todos</h3>
          <p className="project__description">
            A dynamic To-do application that ensures seamless state management and a modern user experience.
          </p>
          <ul className="project__details">
            <li><strong>Technologies:</strong> React Vite, Redux-Toolkit, Context API, Tailwind CSS</li>
            <li><strong>Key Features:</strong> Add, complete, and delete tasks</li>
            <li><strong>Outcome:</strong> Optimized development and high-performance delivery</li>
          </ul>
          <a 
            href="https://github.com/Rushikatrodiya/TodoApp" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project__link"
          >
            View on GitHub
          </a>
        </div>

        <div className="projects__item project">
          <h3 className="project__title">Document Conversion Tool</h3>
          <p className="project__description">
            A full-stack web application to convert Microsoft Word documents (.docx) to PDF efficiently.
          </p>
          <ul className="project__details">
            <li><strong>Technologies:</strong> React, Node.js</li>
            <li><strong>Key Features:</strong> Intuitive interface for file uploads and seamless conversion</li>
            <li><strong>Outcome:</strong> Enhanced document management and user convenience</li>
          </ul>
          <a 
            href="https://github.com/Rushikatrodiya/docTopdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project__link"
          >
            View on GitHub
          </a>
        </div>

        <div className="projects__item project">
          <h3 className="project__title">Backend of VideoTube</h3>
          <p className="project__description">
            Developed backend architecture for a video-sharing platform, handling video uploads, user authentication, and video management.
          </p>
          <ul className="project__details">
            <li><strong>Technologies:</strong> Node.js, Express.js, MongoDB, JWT, bcrypt, Multer, Cloudinary, Postman</li>
            <li><strong>Key Features:</strong> Video upload, likes, dislikes, comments, and API integration</li>
          </ul>
          <a 
            href="https://github.com/Rushikatrodiya/Backend" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="project__link"
          >
            View on GitHub
          </a>
        </div>
      </section>

      {/* Internship Section */}
      <section className="my-work__section internship">
        <h2 className="internship__title">Internship</h2>
        <h3 className="internship__company">Web Application Developer Intern – Gusto Valley Technovations</h3>
        <p className="internship__duration"><strong>Duration:</strong> 16 May 2024 – 16 June 2024</p>
        <ul className="internship__details">
          <li>Built and enhanced responsive web applications using HTML, CSS, and JavaScript</li>
          <li>Designed and implemented features like form validation and dynamic content loading</li>
          <li>Integrated RESTful APIs for efficient communication between the frontend and backend</li>
        </ul>
        <p className="internship__skills"><strong>Skills Gained:</strong> Real-world experience in web development and API integration</p>
      </section>

      {/* Certifications Section */}
      <section className="my-work__section certifications">
        <h2 className="certifications__title">Certifications</h2>
        <ul className="certifications__list">
          <li>Database Management Essentials (Coursera)</li>
          <li>Web Development (Coursera)</li>
          <li>Java Class Library (Coursera)</li>
        </ul>
      </section>

      {/* Technical Skills Section */}
      <section className="my-work__section technical-skills">
        <h2 className="technical-skills__title">Technical Skills</h2>
        <ul className="technical-skills__list">
          <li><strong>Languages:</strong> JavaScript, Java, C, Python, HTML, CSS</li>
          <li><strong>Frameworks/Technologies:</strong> ReactJS, Node.js, ExpressJS</li>
          <li><strong>Database:</strong> MongoDB</li>
          <li><strong>Tools:</strong> VS Code, GitHub, Postman, Cloudinary</li>
        </ul>
      </section>
    </div>
  );
}

export default MyWork;
