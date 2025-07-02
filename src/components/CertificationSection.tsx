
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CertificateSection = () => {
  const certificates = [
    {
      id: 1,
      title: "Google Advanced Data Analytics",
      issuer: "Google",
      date: "2025",
      type: "Professional",
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400&h=300&fit=crop",
      skills: ["Data Analytics", "Python"]
    },
    {
      id: 2,
      title: "Google IT Support",
      issuer: "Google",
      date: "2025",
      type: "Professional",
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400&h=300&fit=crop",
      skills: ["IT Support"]
    },
    {
      id: 3,
      title: "Flutter - Mobile App Development (Batch 47)",
      issuer: "Sanbercode",
      date: "2023",
      type: "Bootcamp Intensif",
      image: "https://sanbercode.com/assets/img/identity/logo@2x.jpg",
      skills: ["Flutter", "Design"]
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "professional":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "associate":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "certified":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications and achievements that validate my expertise 
            in various technologies and development practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <Card 
              key={cert.id} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-900 border-0 shadow-lg overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={getTypeColor(cert.type)}>
                    {cert.type}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {cert.title}
                </CardTitle>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Issued in {cert.date}
                  </p>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
