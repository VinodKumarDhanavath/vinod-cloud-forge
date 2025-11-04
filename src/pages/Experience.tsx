import { Calendar, MapPin, Building, TrendingUp, Users, Shield } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      period: "2020 - 2023",
      title: "DevOps Consultant",
      company: "Genpact",
      location: "Hyderabad, India",
      type: "Full-time",
      description: "Led cloud transformation initiatives and DevOps implementation for Fortune 500 clients",
      achievements: [
        "Designed and implemented multi-AZ cloud architecture on AWS, ensuring 99.9% uptime",
        "Built comprehensive CI/CD pipelines using GitHub Actions, Jenkins, and Maven",
        "Containerized legacy applications using Docker and orchestrated with Kubernetes",
        "Reduced operational costs by 25% through strategic cloud resource optimization",
        "Managed 1 billion+ AWS Lambda requests monthly with automated scaling",
        "Ensured HIPAA and PIPEDA compliance for healthcare sector applications",
        "Implemented Infrastructure as Code using Terraform and CloudFormation"
      ],
      technologies: ["AWS", "Azure", "Terraform", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"],
      icon: Shield,
      color: "primary"
    },
    {
      period: "2019",
      title: "Business Analyst",
      company: "Medtronic (via Genpact)",
      location: "Hyderabad, India", 
      type: "Contract",
      description: "Enhanced business processes and system integrations for medical device operations",
      achievements: [
        "Optimized order management and credit processing workflows",
        "Collaborated with cross-functional teams to streamline operations",
        "Improved project success rates by 10% through process enhancement",
        "Implemented data-driven decision making frameworks",
        "Conducted stakeholder requirement analysis and documentation"
      ],
      technologies: ["SAP ERP", "Salesforce", "Process Mapping", "Data Analysis"],
      icon: TrendingUp,
      color: "secondary"
    },
    {
      period: "2014 - 2017",
      title: "Process Developer (Credit Card Analysis)",
      company: "Genpact",
      location: "Hyderabad, India",
      type: "Full-time",
      description: "Developed analytical solutions for credit card operations and customer insights",
      achievements: [
        "Analyzed customer spending patterns and behavioral data",
        "Created comprehensive Power BI dashboards for executive reporting",
        "Delivered insights that increased customer spending by 15%",
        "Enhanced customer engagement through data-driven recommendations",
        "Implemented automated reporting solutions reducing manual effort by 60%",
        "Collaborated with Axis Bank team for credit risk assessment"
      ],
      technologies: ["Power BI", "SQL", "Advanced Excel", "Statistical Analysis", "Python"],
      icon: Users,
      color: "accent"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          icon: 'text-primary bg-primary/10',
          border: 'border-primary/20',
          accent: 'text-primary'
        };
      case 'secondary':
        return {
          icon: 'text-secondary bg-secondary/10',
          border: 'border-secondary/20',
          accent: 'text-secondary'
        };
      case 'accent':
        return {
          icon: 'text-accent bg-accent/10',
          border: 'border-accent/20',
          accent: 'text-accent'
        };
      default:
        return {
          icon: 'text-primary bg-primary/10',
          border: 'border-primary/20',
          accent: 'text-primary'
        };
    }
  };

  return (
    <div className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl font-bold mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            9+ years of progressive experience in DevOps, cloud engineering, and data analytics, 
            delivering measurable results across diverse industries and technologies.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const colorClasses = getColorClasses(exp.color);
            const IconComponent = exp.icon;
            
            return (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-full bg-border"></div>
                )}
                
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Timeline marker and period */}
                  <div className="flex items-start lg:w-64 flex-shrink-0">
                    <div className={`w-12 h-12 rounded-full ${colorClasses.icon} flex items-center justify-center mr-4 glow-primary`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <div className={`text-sm font-semibold ${colorClasses.accent} bg-muted/20 px-3 py-1 rounded-full inline-block mb-2`}>
                        {exp.period}
                      </div>
                      <div className="text-sm text-muted-foreground">{exp.type}</div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className={`card-gradient border ${colorClasses.border} rounded-xl p-8 hover:border-opacity-50 transition-all duration-300`}>
                      {/* Header */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                          <div className="flex items-center text-muted-foreground">
                            <Building className="w-4 h-4 mr-2" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                      </div>
                      
                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-4 text-foreground">Key Achievements</h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start">
                              <div className={`w-1.5 h-1.5 rounded-full ${colorClasses.accent.replace('text-', 'bg-')} mt-2 mr-3 flex-shrink-0`}></div>
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-3 text-foreground">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-muted/30 text-muted-foreground px-3 py-1 rounded-full text-sm font-medium border border-border hover:border-primary/30 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Career Highlights */}
        <section className="mt-20 animate-fade-in">
          <div className="card-gradient border border-border rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-8 text-center">Career Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div className="text-3xl font-bold text-primary">25%</div>
                <div className="text-sm text-muted-foreground">Cost Reduction</div>
                <p className="text-xs text-muted-foreground">Through strategic cloud optimization</p>
              </div>
              <div className="space-y-3">
                <div className="text-3xl font-bold text-secondary">99.9%</div>
                <div className="text-sm text-muted-foreground">System Uptime</div>
                <p className="text-xs text-muted-foreground">Multi-AZ architecture reliability</p>
              </div>
              <div className="space-y-3">
                <div className="text-3xl font-bold text-accent">1B+</div>
                <div className="text-sm text-muted-foreground">Lambda Requests</div>
                <p className="text-xs text-muted-foreground">Managed monthly with automation</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}