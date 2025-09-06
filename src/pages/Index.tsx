import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AuthModal from "@/components/AuthModal";

const Index = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalTab, setAuthModalTab] = useState<'login' | 'signup'>('login');

  const handleLoginClick = () => {
    setAuthModalTab('login');
    setIsAuthModalOpen(true);
  };

  const handleSignupClick = () => {
    setAuthModalTab('signup');
    setIsAuthModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onLoginClick={handleLoginClick} onSignupClick={handleSignupClick} />
      
      <main>
        <HeroSection onSignupClick={handleSignupClick} onLoginClick={handleLoginClick} />
        <AboutSection onSignupClick={handleSignupClick} />
      </main>

      <footer className="py-12 border-t border-border/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 primary-gradient rounded flex items-center justify-center">
                <span className="text-xs font-bold text-primary-foreground">S</span>
              </div>
              <span className="text-lg font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                SynergySphere
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 SynergySphere. Transforming teamwork through synergy.
            </div>
          </div>
        </div>
      </footer>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        defaultTab={authModalTab}
      />
    </div>
  );
};

export default Index;
