import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Desarrollo Flutter"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 rounded-full glass-card">
            <span className="text-sm font-medium text-primary">Analista Programador Full Stack</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            Manuel Máximo{" "}
            <span className="text-gradient">Aguilar</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ingeniero electrónico apasionado por el desarrollo de software. Especializado en Flutter, Java Spring Boot, React y Next.js. Creo soluciones digitales robustas que simplifican la vida de las personas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="group"
            >
              <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Hablemos de tu proyecto
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
            >
              <a
                href="CVManuelAguilar.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                Ver CV
              </a>
            </Button>
          </div>

          {/* Tech Stack Pills */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {["Flutter", "Spring Boot", "React", "Next.js", "TypeScript", "PostgreSQL"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full glass-card text-sm font-medium hover:border-primary/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-primary"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
