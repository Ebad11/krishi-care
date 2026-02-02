import { ArrowLeft, AlertTriangle, Shield, Droplets, Calendar, Share2, BookmarkPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/layout/MobileLayout";
import { Button } from "@/components/ui/button";

const treatments = [
  {
    icon: Shield,
    title: "Fungicide Application",
    description: "Apply copper-based fungicide every 7-10 days",
    priority: "high",
  },
  {
    icon: Droplets,
    title: "Water Management",
    description: "Avoid overhead watering, water at soil level",
    priority: "medium",
  },
  {
    icon: Calendar,
    title: "Remove Infected Leaves",
    description: "Prune and destroy affected plant parts immediately",
    priority: "high",
  },
];

const Result = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <div className="min-h-screen bg-background">
        {/* Header with Image */}
        <div className="relative">
          <div className="h-64 bg-gradient-to-b from-krishi-warning/20 to-background">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-8xl">🍅</div>
            </div>
          </div>
          
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-5 left-5 p-2 bg-card/90 backdrop-blur-sm rounded-xl shadow-krishi-sm"
          >
            <ArrowLeft className="w-6 h-6 text-foreground" />
          </button>

          {/* Action Buttons */}
          <div className="absolute top-5 right-5 flex gap-2">
            <button className="p-2 bg-card/90 backdrop-blur-sm rounded-xl shadow-krishi-sm">
              <Share2 className="w-5 h-5 text-foreground" />
            </button>
            <button className="p-2 bg-card/90 backdrop-blur-sm rounded-xl shadow-krishi-sm">
              <BookmarkPlus className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        {/* Disease Info Card */}
        <div className="px-5 -mt-8 relative z-10">
          <div className="bg-card rounded-3xl p-5 shadow-krishi-lg animate-slide-up">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-sm text-muted-foreground">Detected Disease</span>
                <h1 className="text-2xl font-bold text-foreground mt-1">Early Blight</h1>
                <p className="text-sm text-muted-foreground mt-1">Tomato • Alternaria solani</p>
              </div>
              <div className="flex items-center gap-2 bg-krishi-warning/10 px-3 py-2 rounded-xl">
                <AlertTriangle className="w-5 h-5 text-krishi-warning" />
                <span className="text-sm font-semibold text-krishi-warning">Moderate</span>
              </div>
            </div>

            {/* Confidence */}
            <div className="mt-5">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-muted-foreground">Detection Confidence</span>
                <span className="font-semibold text-primary">94%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full gradient-primary rounded-full transition-all duration-1000"
                  style={{ width: "94%" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="px-5 mt-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
          <h2 className="text-lg font-semibold text-foreground mb-3">About this Disease</h2>
          <p className="text-muted-foreground leading-relaxed">
            Early blight is a common fungal disease affecting tomatoes. It causes brown spots with concentric rings on older leaves, which can spread to stems and fruit. The disease thrives in warm, humid conditions.
          </p>
        </div>

        {/* Treatments */}
        <div className="px-5 mt-6 pb-6 animate-slide-up" style={{ animationDelay: "200ms" }}>
          <h2 className="text-lg font-semibold text-foreground mb-4">Recommended Treatment</h2>
          <div className="space-y-3">
            {treatments.map((treatment, index) => {
              const Icon = treatment.icon;
              return (
                <div
                  key={treatment.title}
                  className="bg-card rounded-2xl p-4 shadow-krishi-sm flex items-start gap-4 animate-slide-up"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    treatment.priority === "high" ? "bg-destructive/10" : "bg-krishi-sky/10"
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      treatment.priority === "high" ? "text-destructive" : "text-krishi-sky"
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground">{treatment.title}</h3>
                      {treatment.priority === "high" && (
                        <span className="text-xs bg-destructive/10 text-destructive px-2 py-0.5 rounded-full font-medium">
                          Priority
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{treatment.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Button */}
          <Button className="w-full h-14 text-lg font-semibold gradient-primary text-primary-foreground rounded-2xl shadow-krishi-primary mt-6">
            Get Expert Consultation
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Result;
