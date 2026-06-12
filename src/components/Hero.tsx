import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20" />
      </div>

      {/* Content aligned RIGHT */}
      <div className="container mx-auto px-6 relative z-10 flex justify-end">
        
        <div className="max-w-2xl space-y-8 text-right">

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight">
            Hey, I'm{" "}
            <span className="text-gradient">Vasantha Lahari</span> 
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground">
            Building creative solutions with AI, Design & Code
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end pt-4">
            
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact Me
            </Button>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
