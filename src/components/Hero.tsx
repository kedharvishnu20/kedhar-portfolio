import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/30 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 border border-accent/30 rotate-45 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Picture Placeholder */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-primary/50 flex items-center justify-center tech-glow animate-glow">
            <span className="text-4xl font-bold text-primary-foreground">KVB</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
          <span className="block text-foreground">Kedhar Vishnu</span>
          <span className="block gradient-text">Buddepu</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          Backend Developer | AI Enthusiast | FastAPI Explorer
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="tech-button px-8 py-6 text-lg rounded-full"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-6 text-lg rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;