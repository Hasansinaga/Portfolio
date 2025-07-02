const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Hasan Sinaga
            </h3>
            <p className="text-gray-300 max-w-md">
              Full Stack Software Engineer passionate about creating innovative
              solutions and building scalable applications.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {[
                "Profile",
                "Experience",
                "Projects",
                "Skills",
                "Certificates",
              ].map((link) => (
                <button
                  key={link}
                  onClick={() =>
                    document
                      .getElementById(link.toLowerCase())
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="space-y-2">
              <a
                href="mailto:alex@example.com"
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                sinagahasan17@gmail.com
              </a>
              <a
                href="tel:+1234567890"
                className="block text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                +62 85270153528
              </a>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://www.linkedin.com/in/hasan-sinaga-375122271/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Hasansinaga"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
