import { useState, useEffect, useRef } from 'react';
import { Code, Database, Globe, Terminal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Programming Languages",
      skills: [
        { name: "C++", level: 85 },
        { name: "Java", level: 40 },
        { name: "C", level: 60 },
        { name: "JavaScript", level: 30 }
      ]
    },
    {
      icon: <Globe className="h-8 w-8 text-secondary" />,
      title: "Web Technologies",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "React", level: 40 },
        { name: "MERN Stack", level: 30 }
      ]
    },
    {
      icon: <Database className="h-8 w-8 text-accent" />,
      title: "Database & Tools",
      skills: [
        { name: "MySQL", level: 50 },
        { name: "Git/GitHub", level: 55 },
        { name: "VS Code", level: 60 }
      ]
    },
    {
      icon: <Terminal className="h-8 w-8 text-primary" />,
      title: "Problem Solving",
      skills: [
        { name: "Data Structures", level: 75 },
        { name: "Algorithms", level: 5 },
        { name: "LeetCode", level: 65 },
        { name: "Debugging", level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical competencies and ongoing learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="glass-card hover-scale animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  {category.icon}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className={`skill-progress ${isVisible ? 'w-full' : 'w-0'}`}
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Other Technologies & Interests</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Responsive Design', 'RESTful APIs', 'Agile Methodology', 'Software Engineering',
              'Object-Oriented Programming', 'Version Control', 'Problem Analysis', 'Team Collaboration'
            ].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gradient-primary text-primary-foreground rounded-full text-sm font-medium hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
