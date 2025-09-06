import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-collaboration.jpg";

interface HeroSectionProps {
  onSignupClick: () => void;
  onLoginClick: () => void;
}

const HeroSection = ({ onSignupClick, onLoginClick }: HeroSectionProps) => {
  return (
    <section className="pt-20 pb-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <TrendingUp className="w-4 h-4 mr-2" />
                Boost Team Collaboration by 300%
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Where Teams Create{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-success bg-clip-text text-transparent animate-pulse-glow">
                  Synergy
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Transform your projects with intelligent task management, real-time collaboration, 
                and our revolutionary synergy scoring system that gamifies teamwork.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl" 
                onClick={onSignupClick}
                className="group"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
              
              <Button variant="glass" size="xl" onClick={onLoginClick}>
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border/20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 success-gradient rounded-lg flex items-center justify-center shadow-success">
                  <Users className="w-5 h-5 text-success-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-success">10K+</div>
                  <div className="text-sm text-muted-foreground">Active Teams</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 accent-gradient rounded-lg flex items-center justify-center shadow-accent">
                  <Target className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">98%</div>
                  <div className="text-sm text-muted-foreground">Project Success Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <img
                src={heroImage}
                alt="Team collaboration in SynergySphere"
                className="w-full h-auto rounded-2xl shadow-card"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 primary-gradient rounded-2xl shadow-primary animate-float opacity-80"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 accent-gradient rounded-xl shadow-accent animate-bounce-subtle opacity-60"></div>
            </div>
            
            {/* Synergy Score Card */}
            <div className="absolute bottom-8 left-8 glass p-4 rounded-xl border border-primary/20 animate-pulse-glow">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 success-gradient rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-success-foreground" />
                </div>
                <div>
                  <div className="text-sm font-medium">Team Synergy</div>
                  <div className="text-2xl font-bold text-success">+850</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;