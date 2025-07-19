import { Server, Zap, Bot, Database, Code, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Server className="h-8 w-8" />,
      title: "Django Backend Development",
      description: "Full-stack Django applications with robust architecture, database design, and scalable solutions for web applications.",
      features: ["Custom Django Applications", "Database Design & Optimization", "Authentication Systems", "Admin Panel Customization"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "FastAPI Microservices",
      description: "Modern, fast API development using FastAPI for high-performance microservices and RESTful applications.",
      features: ["High-Performance APIs", "Async Programming", "Auto Documentation", "Type Hints & Validation"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "REST API Design",
      description: "Well-structured, documented APIs following REST principles with proper authentication and error handling.",
      features: ["RESTful Architecture", "API Documentation", "Authentication & Authorization", "Error Handling"]
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "AI Integrations",
      description: "Integration of AI models and services including LLM APIs, chatbots, and machine learning solutions.",
      features: ["LLM API Integration", "Gemini & Meta LLaMA", "Custom AI Workflows", "Data Processing"]
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Document-based Chatbots",
      description: "RAG (Retrieval Augmented Generation) implementation for intelligent document-based question answering systems.",
      features: ["RAG Implementation", "Vector Search (FAISS)", "Document Processing", "Conversational AI"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Scraping Solutions",
      description: "Automated data collection and web scraping using Python tools for research and data analysis purposes.",
      features: ["BeautifulSoup Scraping", "Data Cleaning", "API Data Collection", "Automated Workflows"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized backend development and AI integration services to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="tech-card group h-full">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;