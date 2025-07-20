import { GraduationCap, Target, Code, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const highlights = [
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Academic Excellence",
      description: "Maintaining 8.5 CGPA in B.Tech IT program in  Dhirajlal Gandhi College of Technology"
    },
    {
      icon: <Code className="h-8 w-8 text-secondary" />,
      title: "Continuous Learning",
      description: "Currently mastering MERN stack development"
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Problem Solving",
      description: "Active on LeetCode and GeeksforGeeks platforms"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Collaboration",
      description: "Experienced in hackathons and team projects"
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image & Info */}
          <div className="text-center md:text-left animate-fade-in-left">
            <div className="relative mb-8">
              <div className="w-64 h-64 mx-auto md:mx-0 bg-gradient-primary rounded-full p-1">
                <div className="w-full h-full bg-muted rounded-full flex items-center justify-center">
                  <div className="text-8xl font-bold text-muted-foreground">MB</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-secondary rounded-full flex items-center justify-center animate-float">
                <Code className="h-8 w-8 text-white" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Malathi B</h3>
              <p className="text-lg text-muted-foreground">B.Tech 3rd IT Student | Dhirajlal Gandhi College of Technology</p>
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Salem, Tamil Nadu
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  Open to Opportunities
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="animate-fade-in-right">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6 text-foreground">
                Passionate and self-motivated undergraduate IT student with a strong interest in 
                full-stack development and data structures & algorithms. Currently enhancing my 
                skills in the MERN stack and actively practicing coding on platforms like LeetCode and GFG.
              </p>
              <p className="text-lg leading-relaxed mb-8 text-muted-foreground">
                I aim to build real-world applications and contribute effectively in collaborative 
                tech environments. My journey in technology is driven by curiosity and the desire 
                to solve complex problems through innovative solutions.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="glass-card hover-scale">
                  <CardContent className="p-6">
                    <div className="mb-4">{highlight.icon}</div>
                    <h4 className="font-semibold mb-2 text-foreground">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
