import { Award, ExternalLink, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "ChatGPT Prompt Engineering",
      issuer: "EDX",
      date: "2024",
      description: "Comprehensive course on prompt engineering techniques and best practices for working with Large Language Models. Gained hands-on experience building end-to-end AI assistants including the RagBot project.",
      skills: ["Prompt Engineering", "LLM Integration", "AI Assistant Development", "Conversational AI"],
      certificateUrl: "https://courses.edx.org/certificates/37d221ee164b4ed08a8f2a6a547735fa",
      status: "Verified"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      {/* Certifications Section */}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
        <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>

        {/* Certifications List */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
        <Card key={index} className="tech-card group h-full">
          <CardHeader className="pb-6">
            <div className="flex items-start justify-between mb-4">
          <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
            <Award className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
          </div>
          <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium">
            {cert.status}
          </span>
            </div>
            <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
          {cert.title}
            </CardTitle>
            <div className="flex items-center text-muted-foreground mt-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm">{cert.issuer} • {cert.date}</span>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
          {cert.description}
            </p>

            <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">Skills Gained:</h4>
          <div className="flex flex-wrap gap-2">
            {cert.skills.map((skill, skillIndex) => (
              <span
            key={skillIndex}
            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
              >
            {skill}
              </span>
            ))}
          </div>
            </div>

            <div className="pt-4">
          <Button
            variant="outline"
            className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open(cert.certificateUrl, '_blank')}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            View Certificate
          </Button>
            </div>
          </CardContent>
        </Card>
          ))}
        </div>

        {/* 
        Future Learning Section
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto tech-card p-8">
        <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
        <p className="text-muted-foreground mb-6">
          Currently expanding knowledge in FastAPI, advanced AI integration techniques, 
          and cloud deployment strategies. Always eager to tackle new challenges and 
          explore emerging technologies in the backend development landscape.
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {["FastAPI Mastery", "Cloud Architecture", "Microservices", "DevOps", "AI/ML Engineering"].map((topic, index) => (
            <span
          key={index}
          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium border border-border"
            >
          {topic}
            </span>
          ))}
        </div>
          </div>
        </div>
        */}
      </div>
    </section>
  );
};

export default Certifications;