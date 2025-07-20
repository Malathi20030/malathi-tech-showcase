import { GraduationCap, Calendar, MapPin, Award, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const EducationSection = () => {
  const educationData = [
    {
      degree: "B.Tech Information Technology",
      institution: "Dhirajlal Gandhi College of Technology",
      location: "Salem, Tamil Nadu",
      duration: "2023 - 2027",
      grade: "CGPA: 8.5",
      status: "Current",
      description: "Comprehensive program covering software engineering, web development, database management, and emerging technologies.",
      highlights: ["Data Structures & Algorithms", "Web Development", "Database Management", "Software Engineering"]
    },
    {
      degree: "HSC - Computer Science Stream",
      institution: "Maniam Park Matric Hr. Sec. School",
      location: "Tamil Nadu",
      duration: "2021 - 2023",
      grade: "Percentage: 75%",
      status: "Completed",
      description: "Specialized in Computer Science with strong foundation in programming concepts and mathematical principles.",
      highlights: ["Computer Science", "Mathematics", "Physics", "Programming Fundamentals"]
    },
    {
      degree: "SSLC",
      institution: "Kalimakal Matric Hr. Sec. School",
      location: "Tamil Nadu",
      duration: "2011 - 2021",
      grade: "Percentage: 85%",
      status: "Completed",
      description: "Strong academic foundation with excellent performance across all subjects.",
      highlights: ["Academic Excellence", "Leadership Skills", "Extracurricular Activities", "Time Management"]
    }
  ];

  return (
    <section id="education" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Educational <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic progression and continuous learning path in technology
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                
                {/* Education Card */}
                <div className="md:ml-16">
                  <Card className="glass-card hover-scale">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                        {/* Main Content */}
                        <div className="flex-1">
                          <div className="flex items-start gap-4 mb-4">
                            <div className="p-3 bg-gradient-primary rounded-xl">
                              <GraduationCap className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
                              <h4 className="text-lg font-semibold text-primary mb-2">{edu.institution}</h4>
                              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                                <div className="flex items-center gap-1">
                                  <MapPin className="h-4 w-4" />
                                  {edu.location}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4" />
                                  {edu.duration}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Award className="h-4 w-4" />
                                  {edu.grade}
                                </div>
                              </div>
                              <div className="flex items-center gap-2 mb-4">
                                <span 
                                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                                    edu.status === 'Current' 
                                      ? 'bg-primary text-primary-foreground' 
                                      : 'bg-secondary text-secondary-foreground'
                                  }`}
                                >
                                  {edu.status}
                                </span>
                              </div>
                              <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                            </div>
                          </div>

                          {/* Highlights */}
                          <div className="mt-6">
                            <h5 className="font-semibold text-foreground mb-3">Key Areas:</h5>
                            <div className="flex flex-wrap gap-2">
                              {edu.highlights.map((highlight, idx) => (
                                <span 
                                  key={idx}
                                  className="px-3 py-1 bg-muted text-muted-foreground rounded-lg text-sm border border-border"
                                >
                                  {highlight}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Learning Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Continuous Learning</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-card hover-scale">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">MERN Stack Development</h4>
                <p className="text-sm text-muted-foreground">Currently pursuing comprehensive MERN stack course on Udemy</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card hover-scale">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Competitive Programming</h4>
                <p className="text-sm text-muted-foreground">Active practice on LeetCode and GeeksforGeeks platforms</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;