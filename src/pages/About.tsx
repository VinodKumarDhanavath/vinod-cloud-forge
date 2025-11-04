import { GraduationCap, Award, Target } from 'lucide-react';

export default function About() {
  const achievements = [
    "Reduced operational costs by 25% through strategic cloud optimization",
    "Managed 1B+ AWS Lambda requests monthly with 99.9% uptime",
    "Enabled HIPAA/PIPEDA compliance for healthcare applications",
    "Delivered data insights that boosted customer engagement at Axis Bank",
    "Led digital transformation initiatives across multiple Fortune 500 clients"
  ];

  const education = [
    {
      year: "2025",
      degree: "PG Diploma in Cloud-Ops",
      institution: "York University",
      description: "Advanced cloud operations, DevSecOps practices, and enterprise architecture"
    },
    {
      year: "2024",
      degree: "PG Diploma in Data Analytics",
      institution: "Durham College",
      description: "Big data processing, machine learning, and business intelligence"
    },
    {
      year: "2016",
      degree: "Master of Business Administration",
      institution: "Osmania University",
      description: "Strategic management, operations, and business process optimization"
    },
    {
      year: "2014",
      degree: "B.Sc. Computer Science",
      institution: "Osmania University",
      description: "Software development, algorithms, and system architecture"
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            A passionate DevSecOps engineer with a unique blend of technical expertise and business acumen, 
            dedicated to building secure, scalable, and cost-efficient cloud solutions.
          </p>
        </div>

        {/* Biography */}
        <section className="mb-16 animate-fade-in">
          <div className="card-gradient border border-border rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Target className="mr-3 w-6 h-6 text-primary" />
              My Journey
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                My career began with a strong foundation in computer science, which I complemented with an MBA 
                to understand the business side of technology. This unique combination has allowed me to bridge 
                the gap between technical solutions and business objectives throughout my 9+ year journey.
              </p>
              <p>
                Starting as a Process Developer analyzing credit card data, I discovered my passion for turning 
                raw data into actionable insights. This led me to DevOps and cloud engineering, where I found 
                the perfect intersection of automation, scalability, and innovation.
              </p>
              <p>
                Today, as a DevSecOps Engineer, I specialize in designing multi-AZ cloud architectures, 
                implementing CI/CD pipelines, and ensuring compliance with industry standards like HIPAA and PIPEDA. 
                My recent education in Cloud-Ops and Data Analytics keeps me at the forefront of emerging technologies.
              </p>
            </div>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-2xl font-semibold mb-8 flex items-center">
            <Award className="mr-3 w-6 h-6 text-accent" />
            Key Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 rounded-lg bg-muted/20 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 glow-primary"></div>
                <p className="text-muted-foreground">{achievement}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education Timeline */}
        <section className="animate-fade-in">
          <h2 className="text-2xl font-semibold mb-8 flex items-center">
            <GraduationCap className="mr-3 w-6 h-6 text-secondary" />
            Education & Learning
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="card-gradient border border-border rounded-xl p-6 ml-6 hover:border-primary/30 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.institution}</p>
                    </div>
                    <span className="text-sm font-medium text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mt-16 animate-fade-in">
          <div className="card-gradient border border-border rounded-xl p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Certifications & Training</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full font-medium">
                Lean Six Sigma Green Belt
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
                AWS Solutions Architecture
              </span>
              <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full font-medium">
                DevSecOps Practices
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}