import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vinod.dh1893@gmail.com",
      href: "mailto:vinod.dh1893@gmail.com",
      color: "primary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/vinoddkumardh/",
      color: "secondary"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my code",
      href: "https://github.com/VinodKumarDhanavath",
      color: "accent"
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, innovative projects, or potential collaborations. 
            Let's explore how we can work together to achieve your DevOps and cloud objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <div className="card-gradient border border-border rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <Send className="mr-3 w-6 h-6 text-primary" />
                Send me a message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    className="bg-background border-border focus:border-primary min-h-[120px]"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-hero w-full py-3"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            {/* Contact Details */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                const colorClass = item.color === 'primary' ? 'text-primary' : 
                                 item.color === 'secondary' ? 'text-secondary' : 'text-accent';
                
                return (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center p-4 rounded-lg bg-muted/20 border border-border hover:border-primary/30 transition-colors group"
                  >
                    <div className={`w-12 h-12 rounded-full bg-muted/30 flex items-center justify-center mr-4 group-hover:bg-primary/10 transition-colors`}>
                      <IconComponent className={`w-6 h-6 ${colorClass}`} />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{item.label}</div>
                      <div className="text-sm text-muted-foreground">{item.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Availability */}
            <div className="card-gradient border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <CheckCircle className="mr-3 w-5 h-5 text-accent" />
                Current Availability
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">DevOps Consulting</span>
                  <span className="text-accent font-medium">Available</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Cloud Architecture</span>
                  <span className="text-accent font-medium">Available</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Full-time Positions</span>
                  <span className="text-secondary font-medium">Open to discuss</span>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="card-gradient border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Response Time</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I typically respond to messages within 24 hours during business days. 
                For urgent matters, please mention it in your subject line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}