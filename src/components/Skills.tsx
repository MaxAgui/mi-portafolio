const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend & Mobile",
      skills: [
        { name: "Flutter" },
        { name: "Dart" },
        { name: "Material Design" },
        { name: "Diseño Responsive" },
        { name: "React" },
        { name: "Next.js" },
        { name: "Angular" },
        { name: "TypeScript" },
      ],
    },
    {
      title: "Backend & Arquitectura",
      skills: [
        { name: "Spring Boot" },
        { name: "Node.js" },
        { name: "Laravel" },
        { name: "Clean Architecture" },
        { name: "SOLID Principles" },
        { name: "Ruby on Rails" },
      ],
    },
    {
      title: "Estado & Patrones",
      skills: [
        { name: "Riverpod" },
        { name: "Bloc" },
        { name: "Firebase" },
        { name: "REST APIs" },
      ],
    },
    {
      title: "Base de Datos & DevOps",
      skills: [
        { name: "PostgreSQL" },
        { name: "SQL" },
        { name: "CI/CD" },
        { name: "Testing" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Habilidades <span className="text-gradient">Técnicas</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tecnologías y herramientas que domino para crear soluciones excepcionales
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="glass-card p-6 rounded-lg animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h3 className="font-heading font-semibold text-xl mb-6 text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="px-4 py-2 bg-primary/10 rounded-full border border-primary/20 hover:border-primary/40 transition-colors"
                    >
                      <span className="font-medium text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
