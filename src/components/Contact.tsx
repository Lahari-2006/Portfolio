import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Contact = () => {
  const socials = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/vasantha-lahari-587b2b37a",
      color: "hover:bg-[#0A66C2]/10 hover:text-[#0A66C2]",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Lahari-2006",
      color: "hover:bg-foreground/10 hover:text-foreground",
    },
    {
      name: "Email",
      icon: Mail,
      url: "vasanthalahari2006@gmail.com",
      color: "hover:bg-accent/10 hover:text-accent",
    },
    
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to collaborate on new projects or discuss technology. 
             Reach out through any of these platforms!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            {socials.map((social) => (
              <Button
                key={social.name}
                size="lg"
                variant="outline"
                className={`group border-2 transition-all duration-300 ${social.color}`}
                asChild
              >
                <a href={social.url} target="_blank" rel="noopener noreferrer">
                  <social.icon className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  {social.name}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
