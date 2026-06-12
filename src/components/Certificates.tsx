import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Brain } from "lucide-react";

const Certificates = () => {

  const certificates = [
    {
      title: "Oracle AI Foundations Associate",
      issuer: "Oracle",
      icon: Award,
      color: "bg-primary/10 text-primary",
      certificateUrl: "/certificates/oracle-ai.pdf"
    },
    {
      title: "Cambridge Linguaskill English (B2)",
      issuer: "Cambridge",
      icon: Award,
      color: "bg-primary/10 text-primary",
      certificateUrl: "/certificates/linguaskill.pdf"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-12">
          <span className="text-gradient">Certificates</span> & Achievements
        </h2>

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>

              {certificates.map((cert, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-4">

                    {/* 🔥 Clickable card */}
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Card className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300 hover-lift cursor-pointer">
                        <CardContent className="flex flex-col items-center justify-center p-8 space-y-4">
                          
                          <div className={`p-4 rounded-2xl ${cert.color}`}>
                            <cert.icon className="h-12 w-12" />
                          </div>

                          <Award className="h-8 w-8 text-primary" />

                          <h3 className="text-xl font-bold font-heading text-center">
                            {cert.title}
                          </h3>

                          <p className="text-muted-foreground text-center">
                            {cert.issuer}
                          </p>

                          <p className="text-sm text-primary font-medium">
                            Click to view certificate →
                          </p>

                        </CardContent>
                      </Card>
                    </a>

                  </div>
                </CarouselItem>
              ))}

            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
