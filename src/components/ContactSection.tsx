import { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, ExternalLink, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "malathibharathikumaran30@gmail.com",
      link: "mailto:malathibharathikumaran30@gmail.com"
    },
    {
      icon: <MapPin className="h-6 w-6 text-accent" />,
      title: "Location",
      value: "Salem, Tamil Nadu, India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-6 w-6" />,
      url: "https://linkedin.com/",
      color: "hover:text-blue-600"
    },
    {
      name: "GitHub",
      icon: <Github className="h-6 w-6" />,
      url: "https://github.com/",
      color: "hover:text-gray-900 dark:hover:text-gray-100"
    },
    {
      name: "LeetCode",
      icon: <ExternalLink className="h-6 w-6" />,
      url: "https://leetcode.com/u/Malathi_007/",
      color: "hover:text-orange-600"
    },
    {
      name: "GeeksforGeeks",
      icon: <ExternalLink className="h-6 w-6" />,
      url: "https://www.geeksforgeeks.org/user/malathibharatt5yf/",
      color: "hover:text-green-600"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-semibold text-foreground mb-8">Let's Connect</h3>

            {/* Info Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="glass-card hover-scale">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-card rounded-xl">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Find Me Online
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-all duration-300 hover:scale-105 ${social.color}`}
                    >
                      {social.icon}
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Response Note */}
            <div className="mt-8 p-6 bg-gradient-card rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-2">Quick Response</h4>
              <p className="text-sm text-muted-foreground">
                I typically respond within 24 hours. Reach out for internships, projects, or tech chats!
              </p>
            </div>
          </div>

          {/* Right Side - Large Quote */}
          <div className="flex items-center justify-center animate-fade-in-right">
            <div className="glass-card w-full p-10 rounded-2xl border border-border shadow-xl bg-gradient-to-br from-muted/60 to-background/80 backdrop-blur">
              <p className="text-3xl md:text-4xl font-bold text-foreground italic leading-snug tracking-wide text-center">
                “Success is not final, failure is not fatal: It is the courage to continue that counts.”
              </p>
              <div className="text-right mt-6">
                <span className="text-lg text-muted-foreground font-medium">— Winston Churchill</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
