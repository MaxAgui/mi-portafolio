import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/manuelmaximo",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/manuel-aguilar",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:manuelmaximo19@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="py-12 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-heading font-bold text-gradient mb-2">
                Manuel Aguilar
              </h3>
              <p className="text-sm text-muted-foreground">
                Analista Programador Full Stack
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-3 rounded-lg glass-card hover:border-primary/50 transition-all group"
                >
                  <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              © {currentYear} Manuel Aguilar. Hecho con{" "}
              <Heart className="h-4 w-4 text-primary fill-primary" /> y pasión por el código
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
