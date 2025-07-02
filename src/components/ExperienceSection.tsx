import { Card } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      title: "Teaching Assistant in Linear Algebra",
      company: "Del Institute of Technology",
      location: "Laguboti",
      startDate: "Jan 2025",
      endDate: "Jun 2025",
      description:
        "Taught and supervised approximately 50 students in practicum sessions. Designed and supervised exercises and quiz questions to evaluate student understanding.",
      skills: ["Teaching", "Curriculum Design"],
    },
    {
      id: 2,
      title: "Teaching Assistant in Probability and Statistics",
      company: "Del Institute of Technology",
      location: "Laguboti",
      startDate: "Sep 2024",
      endDate: "Dec 2024",
      description:
        "Taught and supervised approximately 50 students in practicum sessions. Designed and supervised exercises and quiz questions to evaluate student understanding.",
      skills: ["Teaching", "Curriculum Design"],
    },
    {
      id: 3,
      title: "Teaching Assistant in English 1",
      company: "Del Institute of Technology",
      location: "Laguboti",
      startDate: "Oct 2024",
      endDate: "Dec 2024",
      description:
        "Conducted tutorial sessions for over 50 students. Designed and supervised exercises and quiz questions to evaluate student understanding.",
      skills: ["Teaching", "Public Speaking"],
    },
    {
      id: 4,
      title: "Independent Study",
      company: "Infinite Learning Indonesia",
      location: "Batam, Indonesia",
      startDate: "Sep 2024",
      endDate: "Dec 2024",
      description:
        "Developed dynamic and responsive web applications using React.js and Node.js. Built interactive and user-friendly UI, managed databases, and performed API integration. Sharpened full-stack development skills tailored to industry needs.",
      technologies: ["React", "Node.js", "MySQL", "API Integration", "Git"],
    },
    {
      id: 5,
      title: "Teaching Assistant in Discrete Mathematics",
      company: "Del Institute of Technology",
      location: "Laguboti",
      startDate: "Aug 2023",
      endDate: "Dec 2023",
      description:
        "Coordinated up to 50% of the discrete mathematics learning process for the entire class. Guided over 50 students through tutorial sessions covering sets, logic, Boolean algebra, graphs, code theory, and mathematical induction. Designed and supervised exercises and quiz questions.",
      skills: ["Teaching", "Curriculum Design"],
    },
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
  };

  const formatDateRange = (startDate: string, endDate: string | null) => {
    const start = formatDate(startDate);
    const end = endDate ? formatDate(endDate) : "Present";
    return `${start} - ${end}`;
  };

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800 hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg hidden md:block"></div>

                <Card className="ml-0 md:ml-16 p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:items-start md:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {experience.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                        {experience.company}
                      </h4>
                      <div className="flex items-center text-gray-600 dark:text-gray-300 mb-3">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="mr-4">{experience.location}</span>
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>
                          {formatDateRange(
                            experience.startDate,
                            experience.endDate
                          )}
                        </span>
                      </div>
                    </div>
                    {experience.endDate === null && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 mb-4 md:mb-0">
                        Current
                      </span>
                    )}
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {(experience.technologies || experience.skills || []).map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;