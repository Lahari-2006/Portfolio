import { Button } from "@/components/ui/button";
import { ExternalLink, Heart, Users, Shield } from "lucide-react";
import skinConnectImg from "@/assets/skinconnect.jpg";

const SkinConnect = () => {
  const features = [
    { icon: Heart, label: "Support & Awareness" },
    { icon: Users, label: "Community Building" },
    { icon: Shield, label: "Safe Space" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-12">
            Featured Project: <span className="text-gradient">SkinConnect</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1 animate-fade-up">
              <div className="rounded-3xl overflow-hidden shadow-2xl hover-lift">
                <img 
                  src={skinConnectImg} 
                  alt="SkinConnect platform" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="order-1 md:order-2 space-y-6 animate-fade-up">
              <h3 className="text-3xl font-bold font-heading">
                A Platform for Connection & Support
              </h3>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                SkinConnect is a compassionate support and awareness platform designed for people 
                living with visible skin conditions. It creates a safe, inclusive community where 
                individuals can connect, share experiences, and find resources.
              </p>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-xl">Key Features:</h4>
                <div className="grid gap-4">
                  {features.map((feature) => (
                    <div 
                      key={feature.label}
                      className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50"
                    >
                      <feature.icon className="h-6 w-6 text-primary" />
                      <span className="font-medium">{feature.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="pt-4">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Updates Coming Soon..
                  
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkinConnect;
