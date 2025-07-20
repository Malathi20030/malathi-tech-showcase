import { Trophy, Users, BookOpen, Target, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AchievementsSection = () => {
  const achievements = [
    {
      icon: <Trophy className="h-8 w-8 text-yellow-500" />,
      title: "Anna University Hackathon 2024",
      category: "Hackathon",
      date: "2024",
      location: "Anna University",
      description: "Participated in prestigious university-level hackathon focusing on innovative technology solutions.",
      skills: ["Problem Solving", "Team Collaboration", "Innovation", "Technical Implementation"],
      impact: "Gained valuable experience in rapid prototyping and working under time constraints"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Google Developer Group Hackathon 2024",
      category: "Hackathon",
      date: "2024",
      location: "GDG Community",
      description: "Collaborated with developers from diverse backgrounds to build solutions using Google technologies.",
      skills: ["Google Cloud", "Web Development", "API Integration", "Teamwork"],
      impact: "Enhanced understanding of cloud technologies and modern development practices"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-secondary" />,
      title: "MERN Stack Development Course",
      category: "Learning",
      date: "Ongoing",
      location: "Udemy",
      description: "Comprehensive course covering MongoDB, Express.js, React, and Node.js with hands-on projects.",
      skills: ["Full-Stack Development", "Database Design", "RESTful APIs", "Modern JavaScript"],
      impact: "Building real-world applications and understanding industry best practices"
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: "Active Competitive Programming",
      category: "Practice",
      date: "Ongoing",
      location: "LeetCode & GeeksforGeeks",
      description: "Consistent practice on coding platforms to strengthen problem-solving skills and algorithmic thinking.",
      skills: ["Data Structures", "Algorithms", "Problem Analysis", "Code Optimization"],
      impact: "Improved logical thinking and ability to solve complex programming challenges"
    }
  ];

  const stats = [
    { number: "8.5", label: "Current CGPA", icon: <Trophy className="h-6 w-6 text-primary" /> },
    { number: "2+", label: "Hackathons", icon: <Users className="h-6 w-6 text-secondary" /> },
    { number: "3+", label: "Projects", icon: <Target className="h-6 w-6 text-accent" /> },
    { number: "50+", label: "DSA Problems", icon: <BookOpen className="h-6 w-6 text-primary" /> }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Hackathon':
        return 'bg-primary text-primary-foreground';
      case 'Learning':
        return 'bg-secondary text-secondary-foreground';
      case 'Practice':
        return 'bg-accent text-accent-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="achievements" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Achievements & <span className="gradient-text">Activities</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milestones in my learning journey and contributions to the tech community
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="glass-card text-center hover-scale animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex justify-center mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="glass-card hover-scale animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-card rounded-xl flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <CardTitle className="text-xl text-foreground leading-tight">{achievement.title}</CardTitle>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(achievement.category)}`}>
                        {achievement.category}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {achievement.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {achievement.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {achievement.description}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Skills Applied:</h4>
                  <div className="flex flex-wrap gap-2">
                    {achievement.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-lg text-sm border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="border-l-4 border-primary pl-4 bg-muted/50 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-foreground mb-2">Impact & Learning:</h4>
                  <p className="text-sm text-muted-foreground italic">
                    {achievement.impact}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Future Goals Section */}
        <div className="mt-16 text-center">
          <Card className="glass-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Upcoming Goals</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Internship Goals</h4>
                  <p className="text-sm text-muted-foreground">Secure internship at a tech company to gain industry experience</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-8 w-8 text-secondary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Skill Enhancement</h4>
                  <p className="text-sm text-muted-foreground">Master advanced React patterns and explore cloud technologies</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-card rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-accent" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">Open Source</h4>
                  <p className="text-sm text-muted-foreground">Contribute to open source projects and build developer community</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;