import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="text-2xl font-bold gradient-text mb-4">Malathi B</div>
            <p className="text-muted-foreground leading-relaxed">
              Passionate IT student on a journey to become a full-stack developer. 
              Building solutions and learning new technologies every day.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Built With</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind CSS', 'Vite'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-muted text-muted-foreground rounded-lg text-sm border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Coffee className="h-4 w-4" />
              <span>Powered by passion and coffee</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>© {currentYear} Malathi B. Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>and</span>
              <Code className="h-4 w-4 text-primary" />
              <span>in Tamil Nadu, India</span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              <span>Always learning, always growing 🚀</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;