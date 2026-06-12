import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code2, Bot, FileSearch, Briefcase, CloudSun } from "lucide-react";

const Projects = () => {

  const projects = [
    {
      title: "RB Financial Consultancy",
      description: "Production-ready full stack financial consultancy platform with client onboarding, service booking, JWT authentication, and role-based dashboards for staff to manage records in real time.",
      tech: ["React", "Tailwind CSS", "FastAPI", "MongoDB", "JWT", "Vercel"],
      icon: Briefcase,
      github: ["https://github.com/Lahari-2006/Frontend", "https://github.com/Lahari-2006/Backend"],
      demo: "https://rb-financial-consultancy.vercel.app/",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
      year: "2025",
      status: "live"
    },
    {
      title: "AI Job Readiness Analyzer",
      description: "Scalable AI platform with multi-stage pipeline: resume parsing → skill extraction → semantic matching → scoring. Covers 200+ technologies with gap analysis and AWS-powered NLP processing.",
      tech: ["Java", "Python", "FastAPI", "React.js", "AWS S3", "Comprehend", "MongoDB", "OpenAI API"],
      icon: Bot,
      github: ["https://github.com/Lahari-2006/AI-Job-Readiness-Analyzer"],
      demo: "",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80",
      year: "Jan 2026 – Feb 2026",
      status: "paused"
    },
    {
      title: "Text-to-SQL Generator",
      description: "Production-ready NL-to-SQL translation system using LLM integration. Resolves ambiguous natural language into accurate, validated SQL with structured error handling and prompt engineering.",
      tech: ["Python", "FastAPI", "SQL", "OpenAI API", "LLM Integration"],
      icon: Code2,
      github: ["https://github.com/Lahari-2006/Text-to-SQL"],
      demo: "",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&q=80",
      year: "Nov 2025 – Dec 2025",
      status: "github"
    },
    {
      title: "RAG Document Q&A Backend",
      description: "End-to-end Retrieval-Augmented Generation pipeline — document ingestion → chunking → FAISS vector search → LLM answer generation — with sub-second semantic search and source attribution.",
      tech: ["Python", "FastAPI", "LangChain", "FAISS", "OpenAI API"],
      icon: FileSearch,
      github: [],
      demo: "",
      image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
      year: "April 2026",
      status: "coming_soon"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website showcasing projects, skills, and certifications with a modern dark UI, smooth animations, and responsive design.",
      tech: ["React", "TailwindCSS", "TypeScript", "Vercel"],
      icon: Code2,
      github: ["https://github.com/Lahari-2006/Portfolio"],
      demo: "https://vasantha-portfolio.vercel.app",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&q=80",
      year: "2025",
      status: "live"
    },
    {
      title: "Weather Application",
      description: "Real-time weather app using REST API integration. Shows live weather data, forecasts, and location-based results with a clean UI.",
      tech: ["React", "REST API", "CSS"],
      icon: CloudSun,
      github: [],
      demo: "",
      image: "https://images.unsplash.com/photo-1504608524841-42584120d094?w=600&q=80",
      year: "2025",
      status: "in_progress"
    }
  ];

  const statusBadge = (status: string) => {
    switch (status) {
      case "paused":
        return <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-400 border border-purple-500/30">⏸ Deploying Soon</span>;
      case "live":
        return <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-green-500/15 text-green-400 border border-green-500/30">🟢 Live</span>;
      case "github":
        return <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-400 border border-blue-500/30">GitHub</span>;
      case "coming_soon":
        return <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-yellow-500/15 text-yellow-400 border border-yellow-500/30">⏳ Coming Soon</span>;
      case "in_progress":
        return <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-orange-500/15 text-orange-400 border border-orange-500/30">🔧 Enhancing</span>;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-4">
          My <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-base">
          A collection of things I've built — from AI pipelines to full stack apps.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card border-border/50 hover:border-primary/50 transition-all duration-300 hover-lift group flex flex-col overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                {/* Status badge on image */}
                <div className="absolute top-3 left-3">
                  {statusBadge(project.status)}
                </div>
                {/* Year */}
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 rounded-full text-xs bg-black/50 text-white/80">{project.year}</span>
                </div>
              </div>

              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-2">
                  <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-1">
                    {/* GitHub: single or split repo */}
                    {project.github.length === 1 && (
                      <a href={project.github[0]} target="_blank" rel="noopener noreferrer" title="GitHub Repo">
                        <Button size="icon" variant="ghost" className="h-8 w-8 hover:bg-primary/10 hover:text-primary">
                          <Github className="h-4 w-4" />
                        </Button>
                      </a>
                    )}
                    {project.github.length === 2 && (
                      <>
                        <a href={project.github[0]} target="_blank" rel="noopener noreferrer" title="Frontend Repo">
                          <Button size="icon" variant="ghost" className="h-8 w-8 hover:bg-primary/10 hover:text-primary text-xs px-1">
                            <Github className="h-3 w-3 mr-0.5" />
                            <span className="text-[10px]">FE</span>
                          </Button>
                        </a>
                        <a href={project.github[1]} target="_blank" rel="noopener noreferrer" title="Backend Repo">
                          <Button size="icon" variant="ghost" className="h-8 w-8 hover:bg-primary/10 hover:text-primary">
                            <Github className="h-3 w-3 mr-0.5" />
                            <span className="text-[10px]">BE</span>
                          </Button>
                        </a>
                      </>
                    )}
                    {/* Demo link */}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" title="Live Demo">
                        <Button size="icon" variant="ghost" className="h-8 w-8 hover:bg-accent/10 hover:text-accent">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>

                {/* Title — clickable if demo exists */}
                <CardTitle className="text-lg font-heading mt-2">
                  {project.demo ? (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </CardTitle>

                <CardDescription className="text-sm pt-1 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-full text-xs bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
