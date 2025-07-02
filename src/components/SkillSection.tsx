import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const SkillSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React/Next.js", level: 70 },
        { name: "Tailwind CSS", level: 70 },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Python", level: 70 },
        { name: "Express.js", level: 75 },
      ],
    },
    {
      title: "Database & Cloud",
      skills: [
        { name: "PostgreSQL", level: 80 },
        { name: "SQL Server", level: 80 },
        { name: "MySQL", level: 80 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 75 },
        { name: "Figma", level: 75 },
      ],
    },
  ];

  const getProgressColor = (level: number) => {
    if (level >= 90) return "bg-green-500";
    if (level >= 80) return "bg-blue-500";
    if (level >= 70) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency
            levels across various programming languages, frameworks, and tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative">
                      <Progress
                        value={skill.level}
                        className="h-3 bg-gray-200 dark:bg-gray-700"
                      />
                      <div
                        className={`absolute top-0 left-0 h-3 rounded-full transition-all duration-1000 ease-out ${getProgressColor(
                          skill.level
                        )}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">
            Technologies I Work With
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "JavaScript",
              "React",
              "Node.js",
              "Python",
              "Laravel",
              "PostgreSQL",
              "REST APIs",
              "Flutter"
            ].map((tech, index) => (
              <div
                key={index}
                className="group p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
