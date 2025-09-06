import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, User, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  onLoginClick: () => void;
  onSignupClick: () => void;
}

const Header = ({ onLoginClick, onSignupClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut, loading } = useAuth();

  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-border/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 primary-gradient rounded-lg flex items-center justify-center shadow-primary">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              SynergySphere
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground/80 hover:text-primary transition-smooth">
              Features
            </a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-smooth">
              About
            </a>
            <a href="#pricing" className="text-foreground/80 hover:text-primary transition-smooth">
              Pricing
            </a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {loading ? (
              <div className="h-8 w-24 bg-muted/50 rounded animate-pulse" />
            ) : user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <User className="w-4 h-4 mr-2" />
                    {user.user_metadata?.full_name || user.email?.split('@')[0] || 'User'}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={signOut}>
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="ghost" onClick={onLoginClick}>
                  Login
                </Button>
                <Button variant="hero" size="lg" onClick={onSignupClick}>
                  Get Started
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/20">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-foreground/80 hover:text-primary transition-smooth">
                Features
              </a>
              <a href="#about" className="text-foreground/80 hover:text-primary transition-smooth">
                About
              </a>
              <a href="#pricing" className="text-foreground/80 hover:text-primary transition-smooth">
                Pricing
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border/20">
                {loading ? (
                  <div className="h-8 w-full bg-muted/50 rounded animate-pulse" />
                ) : user ? (
                  <>
                    <div className="flex items-center space-x-2 p-2 rounded-lg bg-muted/50">
                      <User className="w-4 h-4" />
                      <span className="text-sm">{user.user_metadata?.full_name || user.email?.split('@')[0] || 'User'}</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full" onClick={signOut}>
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="ghost" onClick={onLoginClick}>
                      Login
                    </Button>
                    <Button variant="hero" size="lg" onClick={onSignupClick}>
                      Get Started
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;