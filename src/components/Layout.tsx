import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Code, Cloud, User, Briefcase, FolderOpen, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import stackopsLogo from '@/assets/stackops-logo.png';

const navigationItems = [
  { name: 'Home', href: '/', icon: Code },
  { name: 'About', href: '/about', icon: User },
  { name: 'Skills', href: '/skills', icon: Cloud },
  { name: 'Experience', href: '/experience', icon: Briefcase },
  { name: 'Projects', href: '/projects', icon: FolderOpen },
  { name: 'Contact', href: '/contact', icon: Mail },
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img 
                  src={stackopsLogo} 
                  alt="StackOps Logo" 
                  className="h-16 w-auto"
                />
              </Link>
            </div>
 
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      isActive 
                        ? "text-primary bg-primary/10" 
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-primary"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-colors",
                      isActive 
                        ? "text-primary bg-primary/10" 
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Main content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2025 TheStackOps.ink. Built with precision and passion for DevOps excellence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}