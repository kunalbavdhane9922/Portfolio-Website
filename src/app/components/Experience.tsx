import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { GraduationCap, BookOpen, Calendar, MapPin, ExternalLink, FileText } from "lucide-react";

export function Experience() {
  const academicItems = [
    {
      icon: GraduationCap,
      title: "Bachelor of Technology in Computer Engineering",
      institution: "Vishwakarma Institute of Technology",
      location: "Pune, Maharashtra, India",
      period: "June 2024 - June 2028",
      description: "Current CGPA: 9.41/10.0. Pursuing Computer Engineering with a strong academic foundation in algorithms, system architecture, and software development.",
      highlights: [
        "Data Structures and Algorithms",
        "Operating Systems",
        "Database Management Systems",
        "Object Oriented Programming"
      ]
    },
    {
      icon: BookOpen,
      title: "Research & Publications",
      institution: "Published Academic Research Papers",
      location: "India",
      period: "2025 - 2026",
      description: "Authored and published research exploring real-time inclusive communication and algorithmic financial pattern analysis.",
      papers: [
        {
          title: "Sign Language Recognition: A Real-Time Solution for Inclusive Communication",
          url: "https://www.researchgate.net/profile/Kunal-Bavdhane/publication/396803969_Sign_Language_Recognition_A_Real-Time_Solution_for_Inclusive_Communication/links/69174fc9de81430982713ffa/Sign-Language-Recognition-A-Real-Time-Solution-for-Inclusive-Communication.pdf?__cf_chl_f_tk=cnHsBb5JBf6GkuYxIMLAxYBGW3n3002mgq3KYcVMNJU-1783075132-1.0.1.1-T_Xv5YK4OyWJDN1DiyKjq2d9UXXVvFjOjwY2C.yuj7I"
        },
        {
          title: "Pattern-Based Analysis of Stock Movements Using Candlestick Charting Techniques",
          url: "https://www.scitepress.org/Papers/2025/141807/141807.pdf"
        }
      ],
      link: "https://scholar.google.com/citations?user=Qo1bSicAAAAJ&hl=en",
      linkText: "View Google Scholar Citations & Profile"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Education & Research</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic qualifications and published research work exactly as outlined in my resume.
          </p>
        </div>
        
        <div className="space-y-6">
          {academicItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card key={index} className="transition-all hover:shadow-md">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="flex items-center gap-2 text-xl font-bold">
                        <IconComponent className="h-5 w-5 text-primary shrink-0" />
                        <span>{item.title}</span>
                      </CardTitle>
                      <p className="text-primary font-medium mt-1">{item.institution}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground shrink-0">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
                  {item.highlights && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.highlights.map((highlight, hIndex) => (
                        <Badge key={hIndex} variant="secondary" className="px-3 py-1 font-normal">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  )}
                  {item.papers && (
                    <div className="space-y-3 mb-4">
                      {item.papers.map((paper, pIndex) => (
                        <a 
                          key={pIndex}
                          href={paper.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start justify-between gap-3 p-3.5 rounded-lg bg-secondary/30 hover:bg-primary/10 border border-border/50 hover:border-primary/40 transition-all group shadow-sm"
                        >
                          <div className="flex items-start gap-2.5">
                            <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm font-medium leading-snug group-hover:text-primary transition-colors">
                              {paper.title}
                            </span>
                          </div>
                          <Badge variant="outline" className="shrink-0 gap-1 bg-background text-xs border-primary/30 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <span>Read PDF</span>
                            <ExternalLink className="h-3 w-3" />
                          </Badge>
                        </a>
                      ))}
                    </div>
                  )}
                  {item.link && (
                    <div className="pt-2">
                      <Button variant="outline" size="sm" className="gap-2 border-primary/40 hover:bg-primary/10 transition-colors" asChild>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 text-primary" />
                          {item.linkText}
                        </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}