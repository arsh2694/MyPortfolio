import React, { useState } from 'react';
import { Github, ExternalLink, ChevronDown, ChevronRight, Star } from 'lucide-react';

// Define a type for project with all optional link fields
interface Project {
  title: string;
  subtitle: string;
  tech: string[];
  description: string;
  github?: string;
  live?: string;
  linkedin?: string;
  isHighlight: boolean;
}

const categorizedProjects: {
  category: string;
  projects: Project[];
}[] = [
  {
    category: 'DevOps',
    projects: [
      {
        title: 'CI/CD Pipelines Automation',
        subtitle: 'Major Project',
        tech: ['Linux', 'Docker', 'Python', 'Flask', 'Jenkins'],
        description: 'End-to-end automation of CI/CD process with comprehensive pipeline management and deployment strategies.',
        github: 'https://github.com/arsh2694/Devops_Project1.git',
        isHighlight: true
      }
    ]
  },
  {
    category: 'AI & Utility Project',
    projects: [
      {
        title: 'DestXam - Prompt Engineering / AI',
        subtitle: 'Major Project',
        tech: ['Prompt Engineering', 'Gemini AI'],
        description: 'Simplifies complex topics into short, memorable explanations using advanced AI prompt engineering techniques.',
        live: 'https://huggingface.co/spaces/arsh2694/DestXam',
        github: 'https://github.com/arsh2694/DestXam.git',
        isHighlight: false
      }
    ]
  },
  {
    category: 'Python',
    projects: [
      {
        title: 'TechDash - Python Tools',
        subtitle: 'Minor Project',
        tech: ['Python', 'Streamlit'],
        description: 'Comprehensive dashboard featuring Docker Dashboard, Photogation, and HTML Interpreter tools.',
        github: 'https://github.com/arsh2694/TechDash.git',
        isHighlight: false
      },
      {
        title: 'PythonTask_Camera',
        subtitle: 'Minor Project',
        tech: ['Python'],
        description: 'Takes and saves a photo using the system camera.',
        github: 'https://github.com/arsh2694/PythonTask_Camera.git',
        isHighlight: false
      },
      {
        title: 'PythonTask_Call',
        subtitle: 'Minor Project',
        tech: ['Python'],
        description: 'Makes a phone call through code automation.',
        github: 'https://github.com/arsh2694/PythonTask_Call.git',
        isHighlight: false
      },
      {
        title: 'PythonTask_Facebook',
        subtitle: 'Minor Project',
        tech: ['Python'],
        description: 'Automatically posts content to Facebook.',
        github: 'https://github.com/arsh2694/PythonTask_Facebook.git',
        isHighlight: false
      },
      {
        title: 'PythonTask_Instagram',
        subtitle: 'Minor Project',
        tech: ['Python'],
        description: 'Uploads images or posts to Instagram via script.',
        github: 'https://github.com/arsh2694/PythonTask_Instagram.git',
        isHighlight: false
      },
      {
        title: 'PythonTask_Linkedin',
        subtitle: 'Minor Project',
        tech: ['Python'],
        description: 'Automates posting updates to LinkedIn.',
        github: 'https://github.com/arsh2694/PythonTask_Linkedin.git',
        isHighlight: false
      },
      {
        title: 'PythonTask_sms',
        subtitle: 'Minor Project',
        tech: ['Python'],
        description: 'Sends SMS messages using Python.',
        github: 'https://github.com/arsh2694/PythonTask_sms.git',
        isHighlight: false
      },
      {
        title: 'PythonTask_Twitter',
        subtitle: 'Minor Project',
        tech: ['Python'],
        description: 'Posts tweets to Twitter using automation.',
        github: 'https://github.com/arsh2694/PythonTask_Twitter.git',
        isHighlight: false
      },
      {
        title: 'PythonTask_TechMenu',
        subtitle: 'Minor Project',
        tech: ['Python'],
        description: 'Menu-based project.',
        github: 'https://github.com/arsh2694/PythonTask_TaskMenu.git',
        isHighlight: false
      }
    ]
  },
  {
    category: 'Fullstacks',
    projects: [
      {
        title: 'Photogation Interpreter',
        subtitle: 'Minor Project',
        tech: ['HTML', 'CSS', 'JavaScript'],
        description: 'Location + camera + social integration for enhanced photo sharing and geolocation features.',
        github: 'https://github.com/arsh2694/PhotoGation_Interpreter.git',
        live: 'https://arsh2694.github.io/PhotoGation_Interpreter/',
        isHighlight: false
      },
      {
        title: 'JS_videorecorder',
        subtitle: 'Minor Project',
        tech: ['JavaScript', 'HTML', 'CSS'],
        description: "A web-based video recorder that captures video from the user's camera and saves it locally.",
        github: 'https://github.com/arsh2694/JS_videorecorder.git',
        isHighlight: false
      },
      {
        title: 'JS_LastEmail',
        subtitle: 'Minor Project',
        tech: ['JavaScript', 'HTML', 'CSS'],
        description: 'Displays the most recent email received on a web page interface.',
        github: 'https://github.com/arsh2694/JS_LastEmail.git',
        isHighlight: false
      },
      {
        title: 'JS_Whatsapp',
        subtitle: 'Minor Project',
        tech: ['JavaScript', 'HTML', 'CSS'],
        description: 'Sends a WhatsApp message directly via web or API integration.',
        github: 'https://github.com/arsh2694/JS_Whatsapp.git',
        isHighlight: false
      },
      {
        title: 'JS_email',
        subtitle: 'Minor Project',
        tech: ['JavaScript', 'HTML', 'CSS'],
        description: 'Enables users to send emails from a web page using JavaScript.',
        github: 'https://github.com/arsh2694/JS_email.git',
        isHighlight: false
      },
      {
        title: 'JS_mail-sendphoto',
        subtitle: 'Minor Project',
        tech: ['JavaScript', 'HTML', 'CSS'],
        description: 'Captures a photo using the webcam and sends it via email.',
        github: 'https://github.com/arsh2694/JS_mail-sendphoto.git',
        isHighlight: false
      },
      {
        title: 'JS_camera',
        subtitle: 'Minor Project',
        tech: ['JavaScript', 'HTML', 'CSS'],
        description: 'Captures an image using the device camera and allows it to be downloaded.',
        github: 'https://github.com/arsh2694/JS_camera.git',
        isHighlight: false
      }
    ]
  }
];

const Projects: React.FC = () => {
  // Use a tuple [categoryIndex, projectIndex] to track expanded project
  const [expanded, setExpanded] = useState<[number, number] | null>([0, 0]);
  // Track expanded/collapsed state for each category's project list
  const [showAll, setShowAll] = useState<{ [key: number]: boolean }>({});

  const toggleProject = (catIdx: number, projIdx: number) => {
    if (expanded && expanded[0] === catIdx && expanded[1] === projIdx) {
      setExpanded(null);
    } else {
      setExpanded([catIdx, projIdx]);
    }
  };

  const toggleShowAll = (catIdx: number) => {
    setShowAll((prev) => ({ ...prev, [catIdx]: !prev[catIdx] }));
  };

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            Featured <span className="text-blue-400">Projects</span>
          </h2>

          <div className="space-y-12">
            {categorizedProjects.map((cat, catIdx) => {
              const hasMany = cat.projects.length > 3;
              const isExpanded = showAll[catIdx];
              const visibleProjects = hasMany && !isExpanded ? cat.projects.slice(0, 3) : cat.projects;
              return (
                <div key={cat.category}>
                  <h3 className="text-2xl font-semibold text-blue-300 mb-6 border-b border-gray-700 pb-2">{cat.category}</h3>
                  <div className="space-y-4">
                    {visibleProjects.map((project, projIdx) => (
                      <div
                        key={project.title}
                        className={`relative bg-gray-900 rounded-lg border transition-all duration-300 overflow-hidden ${
                          project.isHighlight
                            ? 'border-blue-400 shadow-lg shadow-blue-400/20 hover:shadow-xl hover:shadow-blue-400/30'
                            : 'border-gray-700 hover:border-gray-600'
                        } ${expanded && expanded[0] === catIdx && expanded[1] === projIdx ? 'transform scale-105' : ''}`}
                      >
                        {project.isHighlight && (
                          <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                            <Star size={14} className="mr-1" />
                            Featured
                          </div>
                        )}

                        <div
                          className="p-6 cursor-pointer"
                          onClick={() => toggleProject(catIdx, projIdx)}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded">
                                  {project.subtitle}
                                </span>
                              </div>
                              <div className="flex flex-wrap gap-2 mb-3">
                                {project.tech.map((tech, idx) => (
                                  <span
                                    key={idx}
                                    className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded border border-gray-700"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="text-gray-400 ml-4">
                              {expanded && expanded[0] === catIdx && expanded[1] === projIdx ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
                            </div>
                          </div>
                        </div>

                        {expanded && expanded[0] === catIdx && expanded[1] === projIdx && (
                          <div className="px-6 pb-6 border-t border-gray-800">
                            <div className="pt-6">
                              <p className="text-gray-300 mb-6">{project.description}</p>
                              <div className="flex flex-wrap gap-4">
                                {project.github && (
                                  <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
                                  >
                                    <Github size={16} />
                                    <span>GitHub</span>
                                  </a>
                                )}
                                {project.live && (
                                  <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
                                  >
                                    <ExternalLink size={16} />
                                    <span>Live Demo</span>
                                  </a>
                                )}
                                {project.linkedin && (
                                  <a
                                    href={project.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors duration-200"
                                  >
                                    <ExternalLink size={16} />
                                    <span>LinkedIn</span>
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  {hasMany && (
                    <div className="flex justify-center mt-2">
                      <button
                        onClick={() => toggleShowAll(catIdx)}
                        className="flex items-center text-blue-400 hover:text-blue-600 font-medium focus:outline-none"
                      >
                        <span>{isExpanded ? 'Show Less' : 'Show All'}</span>
                        {isExpanded ? <ChevronDown className="ml-2" size={20} /> : <ChevronRight className="ml-2" size={20} />}
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;