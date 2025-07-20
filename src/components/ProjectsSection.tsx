import { ExternalLink, Github, Calendar, Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A fully responsive and animated personal portfolio showcasing skills, education, and achievements. Built with modern web technologies and featuring smooth animations, interactive elements, and a clean, professional design.",
      techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      features: [
        "Fully responsive design across all devices",
        "Smooth animations and transitions",
        "Interactive user interface",
        "Clean and professional layout",
        "Cross-browser compatibility"
      ],
      date: "july 2025",
      status: "Completed",
      github: "https://github.com/",
      live: "#",
      image: "portfolio"
    },
    
    {
      title: "Task Management App",
      description: "A productivity application built with React for managing daily tasks and projects. Features include task categorization, priority levels, deadline tracking, and progress monitoring.",
      techStack: ["React", "CSS3", "Local Storage", "JavaScript"],
      features: [
        "Task creation and management",
        "Priority and category system",
        "Due date reminders",
        "Progress tracking",
        "Data persistence with local storage"
      ],
      date: "Coming Soon",
      status: "Planning",
      github: "https://github.com/",
      live: "#",
      image: "taskapp"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500 text-white';
      case 'Development':
        return 'bg-primary text-primary-foreground';
      case 'Planning':
        return 'bg-secondary text-secondary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my development journey and the projects I've built to solve real-world problems
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card hover-scale animate-fade-in overflow-hidden" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="grid lg:grid-cols-3 gap-0">
                {/* Project Image/Visual */}
                <div className="lg:col-span-1 bg-gradient-card p-8 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Code className="h-16 w-16 text-primary-foreground" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="lg:col-span-2">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl text-foreground mb-2">{project.title}</CardTitle>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {project.date}
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-muted text-muted-foreground rounded-lg text-sm border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                      <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                   
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* More Projects Coming Soon */}
        <div className="text-center mt-16">
          <Card className="glass-card max-w-md mx-auto">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">More Projects Coming Soon</h3>
              <p className="text-sm text-muted-foreground mb-4">
                I'm constantly working on new projects and exploring emerging technologies
              </p>
              <Button variant="outline" asChild>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Follow on GitHub
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
