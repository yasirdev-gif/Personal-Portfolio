import React from 'react'
import './projects.css'


function Projects() {
  // 1. Array holding all your project information
  const projects = [
    {
      id: 1,
      title: "E-Commerce Frontend",
      description: "A sleek, responsive online store interface featuring modern product filters and shopping cart state management.",
      tags: ["React", "JavaScript", "Tailwind CSS"],
      liveLink: "https://example.com",
      codeLink: "https://github.com"
    },
    {
      id: 2,
      title: "Weather Dashboard",
      description: "Fetches live climate data using a REST API. Displays 5-day forecasts with custom animated state icons.",
      tags: ["React", "REST API", "CSS Modules"],
      liveLink: "https://example.com",
      codeLink: "https://github.com"
    },
    {
      id: 3,
      title: "Dev Portfolio Website",
      description: "A fast, optimized personal portfolio showing clean components and smooth transition animations.",
      tags: ["JSX", "CSS Transition", "HTML5"],
      liveLink: "https://example.com",
      codeLink: "https://github.com"
    },
    {
      id: 3,
      title: "Dev Portfolio Website",
      description: "A fast, optimized personal portfolio showing clean components and smooth transition animations.",
      tags: ["JSX", "CSS Transition", "HTML5"],
      liveLink: "https://example.com",
      codeLink: "https://github.com"
    }
  ];

  return (
    <section className="projects-section">
      <h2 className="section-title">My Recent Projects</h2>
      
     
   <div className="projects-grid">
         {projects.map((project) => (
           <div key={project.id} className="project-card">
             <h3 className="project-title">{project.title}</h3>
             <p className="project-desc">{project.description}</p>
            
             {/* Tech Tags */}
             <div className="tags-container">
               {project.tags.map((tag, index) => (
                 <span key={index} className="tag">{tag}</span>
               ))}
            </div>
            
             {/* Project Buttons */}
             <div className="links-container">
               <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn btn-live">Live Demo</a>
               <a href={project.codeLink} target="_blank" rel="noreferrer" className="btn btn-code">Source Code</a>
             </div>
           </div>
        ))}
       </div>
    
    
    </section>
  );
}



export default Projects













// const Projects = () => {
//   return (
//     <div className='main-container'>
//         <h1 className='title'>Selected Works</h1>
//         <p className='para'>Here are a few projects I've worked on recently. Want to see more? <span className='word'>Email me.</span></p>
//         <div className="projects">
//             <div className="project">   
//                 <h2 className='project-title'>Project 1</h2>
//                 <p className='project-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>



                

//             </div>
//         </div>
//     </div>
//   )
// }