import { 
  Cloud, 
  Code, 
  Database, 
  Shield, 
  BarChart3, 
  Settings,
  Server,
  GitBranch,
  Palette,
  Award
} from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      color: "primary",
      skills: [
        { name: "Amazon Web Services (AWS)", level: 95 },
        { name: "Microsoft Azure", level: 90 },
        { name: "Terraform", level: 92 },
        { name: "CloudFormation", level: 88 },
        { name: "Docker & Kubernetes", level: 85 },
        { name: "Multi-AZ Architecture", level: 90 }
      ]
    },
    {
      title: "CI/CD & Automation",
      icon: GitBranch,
      color: "secondary",
      skills: [
        { name: "GitHub Actions", level: 92 },
        { name: "Jenkins", level: 88 },
        { name: "Maven", level: 85 },
        { name: "Artifactory", level: 80 },
        { name: "Pipeline Automation", level: 93 },
        { name: "Infrastructure as Code", level: 90 }
      ]
    },
    {
      title: "Programming & Databases",
      icon: Code,
      color: "accent",
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 95 },
        { name: "PostgreSQL", level: 88 },
        { name: "AWS RDS", level: 92 },
        { name: "NoSQL Databases", level: 80 },
        { name: "API Development", level: 85 }
      ]
    },
    {
      title: "Analytics & BI",
      icon: BarChart3,
      color: "primary",
      skills: [
        { name: "Power BI", level: 95 },
        { name: "Tableau", level: 88 },
        { name: "Advanced Excel", level: 92 },
        { name: "Data Modeling", level: 85 },
        { name: "ETL Processes", level: 88 },
        { name: "Business Intelligence", level: 90 }
      ]
    },
    {
      title: "Security & Compliance",
      icon: Shield,
      color: "secondary",
      skills: [
        { name: "HIPAA Compliance", level: 95 },
        { name: "PIPEDA Compliance", level: 90 },
        { name: "Security Scanning", level: 85 },
        { name: "Vulnerability Assessment", level: 82 },
        { name: "Access Management", level: 88 },
        { name: "DevSecOps Practices", level: 90 }
      ]
    },
    {
      title: "Enterprise Systems",
      icon: Server,
      color: "accent",
      skills: [
        { name: "SAP ERP ECC 6.0", level: 85 },
        { name: "Salesforce", level: 88 },
        { name: "System Integration", level: 90 },
        { name: "Process Optimization", level: 92 },
        { name: "Enterprise Architecture", level: 85 },
        { name: "Legacy System Migration", level: 80 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          icon: 'text-primary',
          border: 'border-primary/20 hover:border-primary/50',
          progress: 'bg-primary',
          glow: 'glow-primary'
        };
      case 'secondary':
        return {
          icon: 'text-secondary',
          border: 'border-secondary/20 hover:border-secondary/50',
          progress: 'bg-secondary',
          glow: 'glow-secondary'
        };
      case 'accent':
        return {
          icon: 'text-accent',
          border: 'border-accent/20 hover:border-accent/50',
          progress: 'bg-accent',
          glow: 'glow-accent'
        };
      default:
        return {
          icon: 'text-primary',
          border: 'border-primary/20 hover:border-primary/50',
          progress: 'bg-primary',
          glow: 'glow-primary'
        };
    }
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl font-bold mb-6">
            Skills & <span className="text-gradient">Expertise</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience in DevOps, 
            cloud engineering, and data analytics across diverse industry sectors.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const colorClasses = getColorClasses(category.color);
            const IconComponent = category.icon;
            
            return (
              <div
                key={categoryIndex}
                className={`skill-card ${colorClasses.border} animate-fade-in`}
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                <div className="flex items-center mb-6">
                  <IconComponent className={`w-8 h-8 mr-3 ${colorClasses.icon}`} />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => {
                    const circumference = 2 * Math.PI * 36; // radius = 36
                    const strokeDasharray = `${(skill.level / 100) * circumference} ${circumference}`;
                    
                    return (
                      <div key={skillIndex} className="flex flex-col items-center p-3 rounded-lg hover:bg-muted/20 transition-colors group">
                        {/* Circular Progress */}
                        <div className="relative w-20 h-20 mb-3">
                          <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 80 80">
                            {/* Background circle */}
                            <circle
                              cx="40"
                              cy="40"
                              r="36"
                              stroke="currentColor"
                              strokeWidth="6"
                              fill="none"
                              className="text-muted/30"
                            />
                            {/* Progress circle */}
                            <circle
                              cx="40"
                              cy="40"
                              r="36"
                              stroke="currentColor"
                              strokeWidth="6"
                              fill="none"
                              className={`${colorClasses.icon} transition-all duration-1000 ease-out`}
                              strokeDasharray={strokeDasharray}
                              strokeDashoffset="0"
                              strokeLinecap="round"
                              style={{
                                animationDelay: `${(categoryIndex * 6 + skillIndex) * 150}ms`
                              }}
                            />
                          </svg>
                          {/* Percentage in center */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className={`text-sm font-bold ${colorClasses.icon}`}>
                              {skill.level}%
                            </span>
                          </div>
                        </div>
                        
                        {/* Skill name */}
                        <span className="text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors leading-tight">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications Section */}
        <section className="animate-fade-in">
          <div className="card-gradient border border-border rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-8 flex items-center justify-center">
              <Award className="mr-3 w-6 h-6 text-primary" />
              Professional Certifications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-6 rounded-lg bg-muted/20 border border-border hover:border-accent/50 transition-colors">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Lean Six Sigma Green Belt</h3>
                <p className="text-sm text-muted-foreground">Process improvement and quality management</p>
              </div>
              
              <div className="p-6 rounded-lg bg-muted/20 border border-border hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">AWS Solutions Architecture</h3>
                <p className="text-sm text-muted-foreground">Cloud architecture and best practices</p>
              </div>
              
              <div className="p-6 rounded-lg bg-muted/20 border border-border hover:border-secondary/50 transition-colors">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">DevSecOps Practices</h3>
                <p className="text-sm text-muted-foreground">Security-integrated development workflows</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}