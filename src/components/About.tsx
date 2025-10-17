import { Code2, Smartphone, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Código Limpio",
      description: "Arquitecturas escalables y mantenibles usando mejores prácticas de Flutter y Dart.",
    },
    {
      icon: Smartphone,
      title: "Cross-Platform",
      description: "Desarrollo de aplicaciones nativas para iOS y Android desde un único código base.",
    },
    {
      icon: Zap,
      title: "Alto Rendimiento",
      description: "Aplicaciones optimizadas con experiencias de usuario fluidas y responsivas.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Sobre <span className="text-gradient">Mí</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Desarrollador Frontend apasionado por crear soluciones móviles innovadoras
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div className="animate-fade-in-up space-y-6">
              <div className="flex justify-center md:justify-start mb-8">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                    alt="Foto de perfil del desarrollador Flutter"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <p className="text-muted-foreground"><span className="text-primary font-semibold">Edad:</span> 27 años</p>
                <p className="text-muted-foreground"><span className="text-primary font-semibold">Ubicación:</span> Lima, Perú</p>
                <p className="text-muted-foreground"><span className="text-primary font-semibold">Email:</span> manuelmaximo19@gmail.com</p>
                <p className="text-muted-foreground"><span className="text-primary font-semibold">Teléfono:</span> +51 966321264</p>
              </div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Soy ingeniero electrónico apasionado por la tecnología y el desarrollo de software, con un fuerte enfoque en crear soluciones que simplifiquen la vida de las personas. Cuento con experiencia en desarrollo mobile utilizando Flutter, así como en backend con tecnologías como Java Spring, Laravel y Node.js. También he trabajado con frameworks como React, Angular con TypeScript y Ruby on Rails.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A lo largo de mi carrera, he participado en el desarrollo de aplicaciones del sector financiero, especialmente en plataformas para compra y venta de acciones en bolsa, gestión de portafolios y manejo de fondos de inversión, lo que me ha permitido entender los desafíos de crear productos seguros, escalables y centrados en el usuario en un entorno altamente regulado.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mi objetivo es aportar al crecimiento de mi equipo y de la empresa mediante la construcción de productos digitales robustos, confiables y con impacto real en la vida de los usuarios.
              </p>
            </div>

            <div className="grid gap-6 animate-fade-in-up">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="glass-card p-6 rounded-lg hover:border-primary/50 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
