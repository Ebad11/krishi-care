import { 
  User, 
  MapPin, 
  Phone, 
  ChevronRight, 
  Bell, 
  HelpCircle, 
  Shield, 
  LogOut,
  Leaf,
  Award,
  TrendingUp
} from "lucide-react";
import MobileLayout from "@/components/layout/MobileLayout";

const menuItems = [
  { icon: Bell, label: "Notifications", sublabel: "Manage alerts" },
  { icon: Leaf, label: "My Crops", sublabel: "Manage your crops" },
  { icon: TrendingUp, label: "Analytics", sublabel: "View statistics" },
  { icon: HelpCircle, label: "Help & Support", sublabel: "Get assistance" },
  { icon: Shield, label: "Privacy & Security", sublabel: "Account settings" },
];

const Profile = () => {
  return (
    <MobileLayout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="gradient-primary pt-8 pb-20 px-5">
          <h1 className="text-xl font-bold text-primary-foreground">My Profile</h1>
        </div>

        {/* Profile Card */}
        <div className="px-5 -mt-12">
          <div className="bg-card rounded-3xl p-5 shadow-krishi-lg animate-slide-up">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center text-4xl shadow-krishi-primary">
                👨‍🌾
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-foreground">Farmer Ravi</h2>
                <div className="flex items-center gap-1 text-muted-foreground mt-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Punjab, India</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground mt-1">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+91 98765 43210</span>
                </div>
              </div>
            </div>

            <button className="w-full mt-4 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-krishi-green-light transition-colors">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="px-5 mt-6">
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-card rounded-2xl p-4 text-center shadow-krishi-sm animate-slide-up" style={{ animationDelay: "100ms" }}>
              <div className="w-10 h-10 rounded-xl bg-krishi-green-light flex items-center justify-center mx-auto mb-2">
                <Leaf className="w-5 h-5 text-primary" />
              </div>
              <p className="text-xl font-bold text-foreground">12</p>
              <p className="text-xs text-muted-foreground">Crops</p>
            </div>
            <div className="bg-card rounded-2xl p-4 text-center shadow-krishi-sm animate-slide-up" style={{ animationDelay: "150ms" }}>
              <div className="w-10 h-10 rounded-xl bg-krishi-sky/20 flex items-center justify-center mx-auto mb-2">
                <TrendingUp className="w-5 h-5 text-krishi-sky" />
              </div>
              <p className="text-xl font-bold text-foreground">24</p>
              <p className="text-xs text-muted-foreground">Scans</p>
            </div>
            <div className="bg-card rounded-2xl p-4 text-center shadow-krishi-sm animate-slide-up" style={{ animationDelay: "200ms" }}>
              <div className="w-10 h-10 rounded-xl bg-krishi-sun/20 flex items-center justify-center mx-auto mb-2">
                <Award className="w-5 h-5 text-krishi-sun" />
              </div>
              <p className="text-xl font-bold text-foreground">3</p>
              <p className="text-xs text-muted-foreground">Badges</p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="px-5 mt-6 pb-6">
          <div className="bg-card rounded-2xl shadow-krishi-sm overflow-hidden">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  className="w-full flex items-center gap-4 p-4 hover:bg-secondary transition-colors animate-slide-up"
                  style={{ animationDelay: `${(index + 3) * 50}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-medium text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.sublabel}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </button>
              );
            })}
          </div>

          {/* Logout Button */}
          <button className="w-full flex items-center justify-center gap-2 mt-4 py-4 text-destructive font-medium hover:bg-destructive/5 rounded-2xl transition-colors">
            <LogOut className="w-5 h-5" />
            Log Out
          </button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Profile;
