import { Button } from "@/components/ui/button";
import { Download, Code, Palette, Brain } from "lucide-react";

const About = () => {
  const skills = [
    { icon: Brain, label: "AI Development", color: "text-primary" },
    { icon: Code, label: "Web Development", color: "text-accent" },
    { icon: Palette, label: "UI/UX Design", color: "text-primary" },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-12 animate-fade-up">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="glass-card rounded-3xl p-8 md:p-12 space-y-8 hover-lift">
            <p className="text-lg text-foreground/80 leading-relaxed">
  I’m a tech enthusiast who loves exploring AI, web development, and design. 
  I enjoy building projects using React, FastAPI, and modern UI/UX ideas. 
  My goal is to create applications that are not only useful but also simple 
  and visually appealing for users.
</p>

<p className="text-lg text-foreground/80 leading-relaxed">
  As a student, I’m always curious to learn new technologies and improve my skills. 
  I like working on AI-based projects, web apps, and creative interfaces that solve 
  real-world problems. I believe in learning by building and turning ideas into 
  practical projects through code.
</p>


            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              {skills.map((skill) => (
                <div
                  key={skill.label}
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <skill.icon className={`h-10 w-10 ${skill.color}`} />
                  <span className="font-semibold text-center">{skill.label}</span>
                </div>
              ))}
            </div>

            {/* Resume Download */}
            <div className="flex justify-center pt-6">
              <a href="/resume.pdf" download>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
