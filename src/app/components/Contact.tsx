import { Card, CardContent } from "./ui/card";
import { Mail, Linkedin, MapPin, GraduationCap } from "lucide-react";

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
          <Card className="transition-all hover:shadow-md h-full flex flex-col justify-center">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email</h4>
                  <a href="mailto:bavdanekunal19@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm break-all">
                    bavdanekunal19@gmail.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="transition-all hover:shadow-md h-full flex flex-col justify-center">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <Linkedin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/kunal-bavdhane-44354032a" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all hover:shadow-md h-full flex flex-col justify-center">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Scholar</h4>
                  <a href="https://scholar.google.com/citations?user=Qo1bSicAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Google Scholar Profile
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="transition-all hover:shadow-md h-full flex flex-col justify-center">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Location</h4>
                  <p className="text-muted-foreground text-sm">Pune, Maharashtra, India</p>
                  <p className="text-xs text-primary/80 mt-1 font-medium">Open to Remote</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}