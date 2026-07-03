import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const techIcons: Record<string, string> = {
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  "Kafka": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  "Redis": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  "FastAPI": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  "Nginx": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg",
  "SQLAlchemy": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "Qdrant": "https://cdn.simpleicons.org/qdrant/E02E49",
  "BullMQ": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
};

export function Projects() {
  const projects = [
    {
      title: "Sovereign AI Enterprise Protocol (SAEP)",
      description: "Designing a multi-tenant AI-native enterprise platform supporting AI workforce orchestration and organizational governance. Built event-driven communication patterns using Kafka and semantic persistence layers with PostgreSQL & Qdrant vector retrieval.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop",
      technologies: ["React", "PostgreSQL", "Qdrant", "Kafka", "Domain-Driven Design"],
      github: "https://github.com/kunalbavdhane9922/Kyrti-Stop-managing-prompts.-Start-leading-an-enterprise.",
      demo: "https://kyrti.netlify.app/"
    },
    {
      title: "LeetCode Tracker & DSA Coaching Platform",
      description: "Full-stack platform analyzing user coding activity to generate personalized topic-wise DSA learning roadmaps. Features Redis + BullMQ asynchronous job processing and MongoDB aggregation pipelines with 60% dashboard latency reduction.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Node.js", "Express.js", "React", "MongoDB", "Redis", "BullMQ", "Docker"],
      github: "https://github.com/kunalbavdhane9922/LeetCode-Tracker-DSA-Coaching-Platform",
      demo: "https://github.com/kunalbavdhane9922/LeetCode-Tracker-DSA-Coaching-Platform"
    },
    {
      title: "Scalable URL Redirection Platform",
      description: "High-performance URL shortening service using Base62 encoding to generate collision-free short links in MySQL with optimized indexing. Implemented Redis cache-aside strategy and containerized stateless FastAPI microservices with Nginx.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
      technologies: ["FastAPI", "MySQL", "Redis", "Docker", "Nginx", "SQLAlchemy"],
      github: "https://github.com/kunalbavdhane9922/Scalable-URL-Redirection-Platform",
      demo: "https://github.com/kunalbavdhane9922/Scalable-URL-Redirection-Platform"
    },
    {
      title: "Real-Time Stock Market Analytics Engine",
      description: "Real-time streaming ingestion and analysis system for live stock market technical pattern detection. Implemented moving averages, volume spike detection, and candlestick pattern algorithms over Kafka and FastAPI.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
      technologies: ["Python", "FastAPI", "Kafka", "Redis", "MySQL", "Docker", "React"],
      github: "https://github.com/kunalbavdhane9922/Real-Time-Stock-Market-Analytics-Engine",
      demo: "https://github.com/kunalbavdhane9922/Real-Time-Stock-Market-Analytics-Engine"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects & Systems</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing high-performance full-stack applications, distributed systems, and real-time AI platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col h-full transition-all hover:shadow-lg">
              <div className="aspect-video overflow-hidden shrink-0">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex flex-col justify-between grow">
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => {
                      const iconUrl = techIcons[tech];
                      const isDarkLogo = ["Express", "Express.js", "Flask", "GitHub", "AWS"].includes(tech);
                      return (
                        <div 
                          key={techIndex} 
                          className="flex items-center gap-1.5 px-2.5 py-1 bg-secondary/30 border border-border/40 rounded-md text-xs font-medium"
                        >
                          {iconUrl && (
                            <img 
                              src={iconUrl} 
                              alt={tech} 
                              className={`w-3.5 h-3.5 object-contain shrink-0 ${isDarkLogo ? "dark:invert" : ""}`} 
                            />
                          )}
                          <span>{tech}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex gap-3 pt-4 border-t mt-auto">
                  <Button variant="outline" size="sm" className="gap-2 flex-1 border-primary/30 hover:bg-primary/10 transition-colors" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                  <Button size="sm" className="gap-2 flex-1 shadow-sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      View Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}