import { GraduationCap, Code, Database, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      degree: "B.Tech",
      institution: "Lendi Institute of Engineering and Technology",
      period: "2022 – 2026",
      grade: "CGPA: 8.55"
    },
    {
      degree: "12th Grade",
      institution: "Sri Chaitanya Junior College",
      period: "2020 – 2022",
      grade: "Grade: 8.58"
    },
    {
      degree: "10th Grade",
      institution: "Sri Chaitanya Techno School",
      period: "2019 – 2020",
      grade: "Grade: 9.8"
    }
  ];

  const skills = [
    {
      category: "Programming Languages",
      items: ["C", "Python"],
      icon: <Code className="h-6 w-6" />
    },
    {
      category: "Backend Technologies",
      items: ["Django (Primary)", "FastAPI (Learning)", "Basic Flask"],
      icon: <Database className="h-6 w-6" />
    },
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript"],
      icon: <Code className="h-6 w-6" />
    },
    {
      category: "Tools & Libraries",
      items: ["GitHub", "BeautifulSoup", "OpenCV", "MediaPipe", "PyAutoGUI", "Streamlit", "FAISS"],
      icon: <Brain className="h-6 w-6" />
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm equipped with strong problem-solving skills, a real eagerness to learn, and effective communication abilities. 
            I enjoy working with others to achieve positive outcomes and am always ready to tackle new challenges with enthusiasm. 
            Outside of work, I like to unwind by listening to music, which keeps me inspired and energized.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <GraduationCap className="mr-3 h-6 w-6 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="tech-card">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-primary mb-2">{edu.degree}</h4>
                    <p className="text-foreground font-medium mb-1">{edu.institution}</p>
                    <div className="flex justify-between text-muted-foreground text-sm">
                      <span>{edu.period}</span>
                      <span className="text-accent font-medium">{edu.grade}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Brain className="mr-3 h-6 w-6 text-primary" />
              Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skillCategory, index) => (
                <Card key={index} className="tech-card">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="text-primary mr-3">{skillCategory.icon}</div>
                      <h4 className="text-lg font-semibold">{skillCategory.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillCategory.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium border border-border hover:border-primary transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;