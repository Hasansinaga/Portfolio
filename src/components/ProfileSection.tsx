import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ProfileSection = () => {
  return (
    <section
      id="profile"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-400 shadow-2xl">
                <img
                  src="/images/hasan.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 animate-pulse"></div>
            </div>
          </div>
          {/* Profile Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm Hasan Sinaga
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-light">
                Full Stack Software Engineer
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                Passionate about crafting innovative solutions and developing scalable applications. Experienced in modern web technologies, with a strong focus on React, Node.js, and Laravel.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://drive.google.com/file/d/1RSQDoKheGkkaVKd39Y1kTXfs9BX2ZHa2/view?usp=sharing" // ← ganti dengan link asli
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 px-8 py-3 text-lg"
                >
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
