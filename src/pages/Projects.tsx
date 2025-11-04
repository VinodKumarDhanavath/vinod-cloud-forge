import { Clock, Code, Rocket, GitBranch } from 'lucide-react';

export default function Projects() {
  const comingSoonProjects = [
    {
      title: "Multi-Cloud DevOps Pipeline",
      description: "Comprehensive CI/CD pipeline spanning AWS and Azure with automated security scanning",
      technologies: ["AWS", "Azure", "Terraform", "GitHub Actions", "Docker"],
      status: "In Development"
    },
    {
      title: "HIPAA-Compliant Data Analytics Platform",
      description: "Secure healthcare data processing platform with real-time analytics and compliance monitoring",
      technologies: ["AWS Lambda", "RDS", "Power BI", "Python", "Compliance Tools"],
      status: "Architecture Phase"
    },
    {
      title: "Cost Optimization Dashboard",
      description: "Interactive dashboard for cloud cost monitoring and optimization recommendations",
      technologies: ["Tableau", "AWS Cost Explorer API", "Python", "Machine Learning"],
      status: "Planning"
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Innovative DevOps and cloud solutions currently in development. Each project demonstrates 
            advanced architectural patterns and industry best practices.
          </p>
        </div>

        {/* Coming Soon Banner */}
        <div className="card-gradient border border-primary/20 rounded-xl p-12 text-center mb-12 animate-fade-in glow-primary">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 glow-primary">
            <Rocket className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Exciting Projects <span className="text-gradient">Coming Soon!</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm currently working on several cutting-edge DevOps and cloud projects that showcase 
            the latest in scalable architecture, security compliance, and cost optimization.
          </p>
          <div className="flex items-center justify-center text-secondary">
            <Clock className="w-5 h-5 mr-2" />
            <span className="font-medium">Stay tuned for updates</span>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {comingSoonProjects.map((project, index) => (
            <div
              key={index}
              className="skill-card animate-scale-in hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Icon */}
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 glow-primary">
                <Code className="w-6 h-6 text-primary-foreground" />
              </div>
              
              {/* Project Info */}
              <h3 className="text-xl font-semibold mb-3 text-foreground">{project.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
              
              {/* Status Badge */}
              <div className="mb-4">
                <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium border border-secondary/20">
                  {project.status}
                </span>
              </div>
              
              {/* Technologies */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-muted/20 text-muted-foreground px-2 py-1 rounded text-xs font-medium border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Section */}
        <section className="animate-fade-in">
          <div className="card-gradient border border-border rounded-xl p-8 text-center">
            <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <GitBranch className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-2xl font-semibold mb-4">Open Source Contributions</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              While my main projects are currently in development, you can explore my coding style 
              and technical approach through my GitHub repositories and contributions.
            </p>
            
            <a
              href="https://github.com/vinod-dhanavath"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors glow-primary"
            >
              <GitBranch className="w-5 h-5 mr-2" />
              View GitHub Profile
            </a>
          </div>
        </section>

        {/* Timeline */}
        <section className="mt-16 animate-fade-in">
          <h2 className="text-2xl font-semibold mb-8 text-center">Project Development Timeline</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="timeline-item">
                <div className="ml-6">
                  <h3 className="font-semibold text-foreground">Q1 2025 - Multi-Cloud DevOps Pipeline</h3>
                  <p className="text-muted-foreground">Complete implementation and documentation</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="ml-6">
                  <h3 className="font-semibold text-foreground">Q2 2025 - HIPAA Analytics Platform</h3>
                  <p className="text-muted-foreground">Beta testing and compliance validation</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="ml-6">
                  <h3 className="font-semibold text-foreground">Q3 2025 - Cost Optimization Dashboard</h3>
                  <p className="text-muted-foreground">Public release and case studies</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}