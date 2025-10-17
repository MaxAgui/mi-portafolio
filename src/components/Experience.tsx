import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Analista Programador Full Stack",
      company: "Grupo Coril",
      period: "Enero 2025 - Octubre 2025",
      description:
        "Desarrollo, mantenimiento y mejora de aplicaciones móviles y web del holding financiero con más de 30 años de experiencia.",
      achievements: [
        "Desarrollo de aplicaciones móviles y web construidas con Flutter y Flutter Web",
        "Implementación de funcionalidades clave: transferencias, depósitos y operaciones con valores",
        "Desarrollo full stack con Java (Spring Boot) y React con Next.js",
        "Implementación de sistema de pagos con proveedor Bank-as-a-Service (BaaS)",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Wydnex",
      period: "Junio 2023 - Enero 2025",
      description:
        "Desarrollo de aplicaciones móviles y web multiplataforma utilizando Flutter para empresas del sector bancario y telecomunicaciones.",
      achievements: [
        "Desarrollo de aplicaciones móviles con Flutter para múltiples clientes",
        "Implementación de interfaces intuitivas y funcionales",
        "Creación y mantenimiento de backends con Laravel y Spring Boot",
        "Implementación de APIs RESTful y optimización del rendimiento",
      ],
    },
    {
      role: "Practicante de Optimización",
      company: "Claro (America Movil Perú)",
      period: "Enero 2022 - Julio 2023",
      description:
        "Colaboración con el equipo de planificación en la optimización de infraestructura de telecomunicaciones.",
      achievements: [
        "Reducción del 30% en packet loss en regiones mediante reportes de saturación",
        "Mantenimiento de webs para inventario y localización de equipos",
        "Automatización de reportes y dashboards con Node.js y Angular",
        "Desarrollo de herramientas internas con Flutter",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Experiencia <span className="text-gradient">Profesional</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Trayectoria desarrollando soluciones móviles para el sector financiero
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-lg animate-fade-in-up relative"
              >
                {/* Timeline indicator */}
                <div className="absolute left-0 top-8 w-1 h-16 bg-gradient-to-b from-primary to-accent rounded-full -ml-4 hidden md:block"></div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-heading font-bold mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-primary font-semibold mb-2">{exp.company}</p>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-3 text-primary">Logros destacados:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex items-start text-muted-foreground"
                      >
                        <span className="text-primary mr-2 mt-1">●</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
