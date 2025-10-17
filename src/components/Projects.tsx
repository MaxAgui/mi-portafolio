import { ExternalLink, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import bolsappPreview from "@/assets/bolsapp-preview.jpg";
import safappPreview from "@/assets/safapp-preview.jpg";

const Projects = () => {
  const projects = [
    {
      title: "BolsApp - Gestión de Portafolios de Acciones (BVL)",
      description:
        "Aplicación móvil para la compra, venta y monitoreo de acciones en la Bolsa de Valores de Lima. Participé en el desarrollo del frontend en Flutter, implementando componentes de interfaz, flujos de navegación y consumo de APIs financieras en tiempo real.",
      image: bolsappPreview,
      technologies: ["Flutter", "Dart", "REST APIs", "Material Design"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=pe.com.coril.bolsapp",
      features: [
        "Componentes de interfaz modernos y fluidos",
        "Flujos de navegación intuitivos",
        "Consumo de APIs financieras en tiempo real",
        "Experiencia de usuario optimizada para operaciones bursátiles",
      ],
    },
    {
      title: "SAFApp - Gestión de Fondos de Inversión",
      description:
        "Aplicación móvil creada con Flutter para que los clientes puedan consultar y administrar fondos de inversión. Desarrollé interfaces dinámicas aplicando Riverpod para la gestión del estado e integré Firebase Cloud Messaging para notificaciones push.",
      image: safappPreview,
      technologies: ["Flutter", "Dart", "Riverpod", "Firebase", "REST APIs", "Material Design"],
      playStoreUrl: "https://play.google.com/store/apps/details?id=pe.com.coril.saf",
      features: [
        "Interfaces dinámicas y responsivas",
        "Gestión de estado con Riverpod",
        "Notificaciones push con Firebase Cloud Messaging (FCM)",
        "Integración con APIs RESTful del backend",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Proyectos <span className="text-gradient">Destacados</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Aplicaciones móviles que he desarrollado para el sector financiero
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center animate-fade-in-up ${
                  index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <div className="relative group overflow-hidden rounded-lg">
                    <img
                      src={project.image}
                      alt={`Captura de pantalla de ${project.title}`}
                      className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <Button variant="default" size="sm" asChild>
                        <a
                          href={project.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Play className="mr-2 h-4 w-4" />
                          Ver en Play Store
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                  <div className="glass-card p-6 md:p-8 rounded-lg">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-primary">Características técnicas:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start text-sm text-muted-foreground"
                          >
                            <span className="text-primary mr-2">▸</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <Button variant="outline" asChild>
                      <a
                        href={project.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ver en Play Store
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
