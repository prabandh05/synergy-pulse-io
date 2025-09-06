import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  Users, 
  Target, 
  MessageSquare, 
  BarChart3, 
  Shield,
  ArrowRight,
  CheckCircle
} from "lucide-react";

interface AboutSectionProps {
  onSignupClick: () => void;
}

const AboutSection = ({ onSignupClick }: AboutSectionProps) => {
  const features = [
    {
      icon: Target,
      title: "Smart Task Management",
      description: "Intelligent task assignment with AI-powered deadline optimization and progress tracking.",
      color: "primary"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Real-time collaboration tools with integrated chat, file sharing, and team insights.",
      color: "accent"
    },
    {
      icon: BarChart3,
      title: "Synergy Scoring",
      description: "Revolutionary gamification system that rewards effective teamwork and collaboration.",
      color: "success"
    },
    {
      icon: MessageSquare,
      title: "Seamless Communication",
      description: "Threaded discussions, notifications, and real-time updates keep everyone aligned.",
      color: "warning"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance certifications.",
      color: "primary"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with instant updates and real-time synchronization.",
      color: "accent"
    }
  ];

  const benefits = [
    "Increase team productivity by up to 300%",
    "Reduce project completion time by 40%",
    "Improve team communication and alignment",
    "Gamify collaboration with synergy points",
    "Get real-time insights into team performance",
    "Scale from small teams to enterprise organizations"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Teams Choose{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              SynergySphere
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Experience the future of project management with our revolutionary platform 
            that transforms how teams collaborate, communicate, and achieve success together.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="card-gradient border-border/50 hover:shadow-card transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-12 h-12 ${feature.color === 'primary' ? 'primary-gradient shadow-primary' : 
                  feature.color === 'accent' ? 'accent-gradient shadow-accent' : 
                  feature.color === 'success' ? 'success-gradient shadow-success' : 
                  'bg-warning text-warning-foreground'} rounded-lg flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Transform Your Team's Performance
            </h3>
            <p className="text-lg text-muted-foreground">
              SynergySphere isn't just another project management tool. It's a complete 
              transformation platform that revolutionizes how your team works together.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="xl" onClick={onSignupClick} className="group mt-8">
              Start Your Transformation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
          </div>

          <div className="space-y-6">
            {/* Synergy Score Visualization */}
            <Card className="card-gradient border-primary/20 shadow-primary">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>Live Synergy Score</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Team Alpha</span>
                    <span className="text-2xl font-bold text-success">+1,240</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div className="synergy-bar h-3 rounded-full w-4/5"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Tasks Completed</div>
                      <div className="font-semibold text-success">+890 points</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Collaboration</div>
                      <div className="font-semibold text-primary">+350 points</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Activity Feed Preview */}
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5 text-accent" />
                  <span>Team Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-2 rounded-lg bg-success/10 border border-success/20">
                    <div className="w-2 h-2 rounded-full bg-success"></div>
                    <span className="text-sm">Sarah completed "API Integration" (+50 synergy)</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 rounded-lg bg-primary/10 border border-primary/20">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm">Team collaboration milestone reached!</span>
                  </div>
                  <div className="flex items-center space-x-3 p-2 rounded-lg bg-accent/10 border border-accent/20">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="text-sm">New project "Mobile App" created</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;