import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/vinod-profile.jpg';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="hero-gradient grid-bg min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-slide-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="text-foreground">Hi, I'm </span>
                <span className="text-gradient">Vinod Dhanavath</span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl text-secondary font-semibold mb-6">
                DevSecOps Engineer | Cloud & DevOps Specialist | Data Analytics Professional
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Building scalable, secure, and cost-efficient cloud solutions with 9+ years of experience 
                in DevOps, cloud architecture, and data analytics. Passionate about automation, 
                compliance, and driving digital transformation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/experience">
                  <Button className="btn-hero px-8 py-3 text-lg">
                    View Portfolio
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="btn-secondary px-8 py-3 text-lg">
                    Contact Me
                    <Mail className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-6">
                <a
                  href="https://linkedin.com/in/vinod-dhanavath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/vinod-dhanavath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="mailto:vinod@example.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            {/* Profile Image */}
            <div className="animate-float">
              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-primary/20 glow-primary">
                  <img
                    src={profileImage}
                    alt="Vinod Dhanavath - DevOps Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse glow-accent"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-pulse glow-secondary"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
      
      {/* Quick Stats */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-scale-in">
              <div className="text-4xl font-bold text-primary mb-2">9+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="animate-scale-in">
              <div className="text-4xl font-bold text-secondary mb-2">25%</div>
              <div className="text-muted-foreground">Cost Reduction Achieved</div>
            </div>
            <div className="animate-scale-in">
              <div className="text-4xl font-bold text-accent mb-2">1B+</div>
              <div className="text-muted-foreground">AWS Lambda Requests/Month</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}