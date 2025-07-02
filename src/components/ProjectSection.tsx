import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "Cattle Feed Management System in TSTH2",
      description:
        "Developed an integrated full-stack system using Node.js and Express.js, collaborating with teams responsible for milk production, finance, and cow health modules.",
      image: "/images/3.png",
      technologies: ["Node.js", "Express.js", "MySQL"],
      githubUrl:
        "https://github.com/T0MM11Y/development-of-dairyTrack-platform.git",
    },
    {
      id: 2,
      title: "Purnama Balige Hotel Information System",
      description:
        "Collaborated as a backend developer and system analyst to create a website-based hotel information system using Laravel and MySQL. Designed 12 sequence diagrams to determine system flow.",
      image: "/images/2.png",
      technologies: ["Laravel", "MySQL", "System Analysis"],
      githubUrl: "https://github.com/putriitr/PA2Kel07_purnamaHotel.git",
    },
    {
      id: 3,
      title: "Purnama Hotel Balige Microservice API",
      description:
        "Developed API-based microservices as a backend developer using Golang Fiber, Golang ORM, and MySQL. Utilized Postman for testing and collaborated on requirement analysis and technical specifications.",
      image: "/images/4.png",
      technologies: ["Golang", "Fiber", "MySQL", "Postman"],
      githubUrl: "https://github.com/Hasansinaga/Microservice_HotelPurnamaBalige.git",
    },
    {
      id: 4,
      title: "Pangombusan Village Website",
      description:
        "Designed and built a full-stack web-based village website with 8 functions using Laravel. Conducted user needs analysis, created 8 sequence diagrams, and prepared technical documentation and seminar presentations.",
      image: "/images/1.png",
      technologies: ["Laravel", "MySQL", "System Analysis"],
      githubUrl: "https://github.com/rickyananada1/PA1-Kel10.git",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in
            full-stack development, backend programming, and system analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-900 border-0 shadow-lg"
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full border-gray-300 dark:border-gray-600"
                    >
                      Code
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
