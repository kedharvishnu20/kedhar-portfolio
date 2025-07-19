import { Heart, Mail, Phone, Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Mail className="h-5 w-5" />, href: "mailto:kedharvishnu1926@gmail.com", label: "Email" },
    { icon: <Phone className="h-5 w-5" />, href: "tel:+919398887913", label: "Phone" },
    { icon: <Github className="h-5 w-5" />, href: "https://github.com/kedharvishnu20", label: "GitHub" },
    { icon: <Linkedin className="h-5 w-5" />, href: "https://linkedin.com/in/kedhar-vishnu-buddepu", label: "LinkedIn" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300"
            >
              Kedhar Vishnu Buddepu
            </button>
            <p className="text-muted-foreground mt-2">
              Backend Developer 
            </p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by Kedhar Vishnu Buddepu © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;