import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Code, Settings, Globe, Database, Users } from "lucide-react";

const skillIcons: Record<string, string> = {
  "C": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "Express": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  "Flask": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
  "FastAPI": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  "AWS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  "Nginx": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg"
};

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["C", "C++", "Python", "Java", "JavaScript", "SQL"]
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MongoDB", "MySQL", "Redis"]
    },
    {
      icon: Globe,
      title: "Frameworks & Libraries",
      skills: ["React", "Node.js", "Express", "Flask", "FastAPI"]
    },
    {
      icon: Settings,
      title: "Tools & Platforms",
      skills: ["Docker", "AWS", "Git", "GitHub", "Nginx"]
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["Public Speaking", "Teamwork", "Leadership", "Communication", "Management", "Analytical Thinking"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Skills & Competencies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Core technical stack, databases, frameworks, and leadership skills strictly detailed in my resume.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            const isLastCard = index === skillCategories.length - 1;
            return (
              <Card key={index} className={`h-full transition-all hover:shadow-md ${isLastCard ? 'md:col-span-2 lg:col-span-2' : ''}`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <IconComponent className="h-5 w-5 text-primary shrink-0" />
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, skillIndex) => {
                      const iconUrl = skillIcons[skill];
                      const isDarkLogo = ["Express", "Express.js", "Flask", "GitHub", "AWS"].includes(skill);
                      return (
                        <div 
                          key={skillIndex} 
                          className="flex items-center gap-2.5 px-3.5 py-2 bg-secondary/20 hover:bg-secondary/40 border border-border/50 rounded-lg transition-all duration-200 shadow-sm"
                        >
                          {iconUrl && (
                            <img 
                              src={iconUrl} 
                              alt={skill} 
                              className={`w-5 h-5 object-contain shrink-0 ${isDarkLogo ? "dark:invert" : ""}`} 
                            />
                          )}
                          <span className="text-sm font-medium">{skill}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}