import { ExternalLink, Github, Bot, Hand } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "RagBot",
      description: "A sophisticated RAG-based chatbot with document upload capabilities, powered by Gemini and Meta LLaMA APIs. Features vector search using FAISS for intelligent document-based question answering.",
      technologies: ["Python", "FastAPI", "HTML/CSS/JS", "Gemini API", "Meta LLaMA", "FAISS"],
      features: [
        "Document Upload & Processing",
        "RAG Implementation",
        "Multi-LLM Integration",
        "Vector Search with FAISS",
        "Real-time Chat Interface"
      ],
      icon: <Bot className="h-8 w-8" />,
      githubUrl: "https://github.com/kedharvishnu20/RagBot",
      demoUrl: "#",
      status: "Completed - Not Deployed"
    },
    {
      title: "Volume and Brightness Control",
      description: "Real-time gesture-based system to control computer volume and brightness using hand tracking. Built with computer vision technologies for touchless device control.",
      technologies: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI", "Streamlit"],
      features: [
        "Hand Gesture Recognition",
        "Real-time Volume Control",
        "Brightness Adjustment",
        "Streamlit Web Interface"
      ],
      icon: <Hand className="h-8 w-8" />,
      githubUrl: "https://github.com/kedharvishnu20/gesture_control",
      demoUrl: "#",
      status: "Completed - Not Deployed"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions in AI, computer vision, and backend development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="tech-card group overflow-hidden h-full">
              <CardHeader className="pb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium">
                    {project.status}
                  </span>
                </div>
                <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium border border-border hover:border-primary transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 tech-button"
                    onClick={() => window.open(project.demoUrl, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo - Not Deployed Yet
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;