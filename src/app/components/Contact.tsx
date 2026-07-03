import { Card, CardContent } from "./ui/card";
import { Mail, Linkedin, MapPin, GraduationCap, ExternalLink } from "lucide-react";

export function Contact() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Connect With Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in building next-gen AI enterprise platforms, high-performance web architecture, or collaborating on research? Feel free to reach out directly!
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <a href="mailto:bavdanekunal19@gmail.com" className="block group h-full focus:outline-none">
            <Card className="h-full flex flex-col justify-center transition-all duration-300 group-hover:border-primary group-hover:shadow-lg group-hover:-translate-y-1.5 cursor-pointer relative overflow-hidden">
              <ExternalLink className="w-4 h-4 text-muted-foreground/0 group-hover:text-primary transition-all absolute top-3 right-3" />
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">Email</h4>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm break-all font-medium">
                      bavdanekunal19@gmail.com
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </a>
          
          <a href="https://www.linkedin.com/in/kunal-bavdhane-44354032a" target="_blank" rel="noopener noreferrer" className="block group h-full focus:outline-none">
            <Card className="h-full flex flex-col justify-center transition-all duration-300 group-hover:border-primary group-hover:shadow-lg group-hover:-translate-y-1.5 cursor-pointer relative overflow-hidden">
              <ExternalLink className="w-4 h-4 text-muted-foreground/0 group-hover:text-primary transition-all absolute top-3 right-3" />
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:scale-110 transition-transform">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">LinkedIn</h4>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm font-medium">
                      Connect on LinkedIn
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </a>

          <a href="https://scholar.google.com/citations?user=Qo1bSicAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="block group h-full focus:outline-none">
            <Card className="h-full flex flex-col justify-center transition-all duration-300 group-hover:border-primary group-hover:shadow-lg group-hover:-translate-y-1.5 cursor-pointer relative overflow-hidden">
              <ExternalLink className="w-4 h-4 text-muted-foreground/0 group-hover:text-primary transition-all absolute top-3 right-3" />
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:scale-110 transition-transform">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">Scholar</h4>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm font-medium">
                      Google Scholar Profile
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </a>
          
          <a href="https://maps.google.com/?q=Pune,+Maharashtra,+India" target="_blank" rel="noopener noreferrer" className="block group h-full focus:outline-none">
            <Card className="h-full flex flex-col justify-center transition-all duration-300 group-hover:border-primary group-hover:shadow-lg group-hover:-translate-y-1.5 cursor-pointer relative overflow-hidden">
              <ExternalLink className="w-4 h-4 text-muted-foreground/0 group-hover:text-primary transition-all absolute top-3 right-3" />
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:scale-110 transition-transform">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">Location</h4>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors text-sm font-medium">Pune, Maharashtra, India</p>
                    <p className="text-xs text-primary/80 mt-1 font-semibold">Open to Remote</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </a>
        </div>
      </div>
    </section>
  );
}