import { ArrowLeft, Home, FlaskConical, Stethoscope, AlertTriangle, ExternalLink, Play, MapPin, ShoppingCart, Volume2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import MobileLayout from "@/components/layout/MobileLayout";
import { Button } from "@/components/ui/button";
import TranslateButton from "@/components/common/TranslateButton";
import ReadAloudButton from "@/components/common/ReadAloudButton";
import { useLanguage } from "@/contexts/LanguageContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const remediesData = {
  homeRemedies: [
    {
      title: "Neem Oil Spray",
      description: "Mix 2 tablespoons of neem oil with 1 liter of water and a few drops of dish soap. Spray on affected areas every 5-7 days.",
      ingredients: ["Neem oil", "Water", "Dish soap"],
      videoUrl: "https://youtube.com/watch?v=example",
    },
    {
      title: "Baking Soda Solution",
      description: "Dissolve 1 tablespoon baking soda in 1 liter water. Add a few drops of vegetable oil. Apply weekly.",
      ingredients: ["Baking soda", "Water", "Vegetable oil"],
      videoUrl: "https://youtube.com/watch?v=example2",
    },
    {
      title: "Garlic Spray",
      description: "Crush 10 garlic cloves, soak in water overnight. Strain and spray on plants in the morning.",
      ingredients: ["Garlic", "Water"],
      videoUrl: "https://youtube.com/watch?v=example3",
    },
  ],
  fertilizers: [
    {
      name: "Copper-based Fungicide",
      brand: "Blitox-50",
      usage: "Apply every 7-10 days",
      price: "₹450",
      shopUrl: "https://amazon.in",
      recommended: true,
    },
    {
      name: "Mancozeb 75% WP",
      brand: "Dithane M-45",
      usage: "2g per liter water",
      price: "₹320",
      shopUrl: "https://amazon.in",
      recommended: true,
    },
    {
      name: "Trichoderma viride",
      brand: "Bio-care",
      usage: "Soil application",
      price: "₹280",
      shopUrl: "https://amazon.in",
      recommended: false,
    },
  ],
  plantDoctors: [
    {
      name: "Dr. Ramesh Kumar",
      specialty: "Plant Pathologist",
      distance: "2.5 km",
      rating: 4.8,
      phone: "+91 9876543210",
    },
    {
      name: "Krishi Vigyan Kendra",
      specialty: "Agricultural Extension",
      distance: "5 km",
      rating: 4.6,
      phone: "+91 9876543211",
    },
    {
      name: "AgriClinic Plus",
      specialty: "Crop Disease Center",
      distance: "8 km",
      rating: 4.5,
      phone: "+91 9876543212",
    },
  ],
  wrongSprays: [
    {
      name: "Urea (excess)",
      reason: "Can worsen fungal infections by promoting lush growth",
      icon: "🚫",
    },
    {
      name: "Pesticides for insects",
      reason: "Will not treat fungal diseases and may harm beneficial organisms",
      icon: "⚠️",
    },
    {
      name: "Herbicides",
      reason: "Can damage the plant further and are not meant for disease treatment",
      icon: "❌",
    },
  ],
};

const Remedies = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { t } = useLanguage();

  const openMaps = (name: string) => {
    window.open(`https://www.google.com/maps/search/${encodeURIComponent(name + ' near me')}`, '_blank');
  };

  const openShop = (url: string) => {
    window.open(url, '_blank');
  };

  const openVideo = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <MobileLayout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="sticky top-0 z-20 bg-card/95 backdrop-blur-sm border-b border-border">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate(-1)}
                className="p-2 bg-secondary rounded-xl"
              >
                <ArrowLeft className="w-5 h-5 text-foreground" />
              </button>
              <div>
                <h1 className="text-lg font-bold text-foreground">Treatment Options</h1>
                <p className="text-xs text-muted-foreground">Early Blight • Tomato</p>
              </div>
            </div>
            <TranslateButton />
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="home" className="w-full">
          <TabsList className="w-full h-auto p-1 bg-secondary/50 rounded-none grid grid-cols-4">
            <TabsTrigger value="home" className="flex flex-col gap-1 py-2 text-xs data-[state=active]:bg-card">
              <Home className="w-4 h-4" />
              Home
            </TabsTrigger>
            <TabsTrigger value="fertilizers" className="flex flex-col gap-1 py-2 text-xs data-[state=active]:bg-card">
              <FlaskConical className="w-4 h-4" />
              Products
            </TabsTrigger>
            <TabsTrigger value="doctors" className="flex flex-col gap-1 py-2 text-xs data-[state=active]:bg-card">
              <Stethoscope className="w-4 h-4" />
              Doctors
            </TabsTrigger>
            <TabsTrigger value="avoid" className="flex flex-col gap-1 py-2 text-xs data-[state=active]:bg-card">
              <AlertTriangle className="w-4 h-4" />
              Avoid
            </TabsTrigger>
          </TabsList>

          {/* Home Remedies */}
          <TabsContent value="home" className="p-5 space-y-4 mt-0">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">{t('homeRemedies')}</h2>
              <ReadAloudButton 
                text={remediesData.homeRemedies.map(r => `${r.title}: ${r.description}`).join('. ')} 
                size="sm" 
              />
            </div>
            {remediesData.homeRemedies.map((remedy, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-4 shadow-krishi-sm animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-foreground">{remedy.title}</h3>
                  <ReadAloudButton text={`${remedy.title}. ${remedy.description}`} size="sm" />
                </div>
                <p className="text-sm text-muted-foreground mt-2">{remedy.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  {remedy.ingredients.map((ing, i) => (
                    <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {ing}
                    </span>
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-3 gap-2"
                  onClick={() => openVideo(remedy.videoUrl)}
                >
                  <Play className="w-4 h-4" />
                  {t('watchVideo')}
                </Button>
              </div>
            ))}
          </TabsContent>

          {/* Fertilizers/Products */}
          <TabsContent value="fertilizers" className="p-5 space-y-4 mt-0">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">{t('fertilizers')}</h2>
            </div>
            {remediesData.fertilizers.map((product, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-4 shadow-krishi-sm animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground">{product.name}</h3>
                      {product.recommended && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                          Recommended
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{product.brand}</p>
                  </div>
                  <span className="font-bold text-primary">{product.price}</span>
                </div>
                
                <p className="text-sm text-muted-foreground mt-2">{product.usage}</p>
                
                <Button 
                  size="sm" 
                  className="mt-3 gap-2 gradient-primary text-primary-foreground"
                  onClick={() => openShop(product.shopUrl)}
                >
                  <ShoppingCart className="w-4 h-4" />
                  {t('shopOnline')}
                </Button>
              </div>
            ))}
          </TabsContent>

          {/* Plant Doctors */}
          <TabsContent value="doctors" className="p-5 space-y-4 mt-0">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">{t('plantDoctors')}</h2>
            </div>
            {remediesData.plantDoctors.map((doctor, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-4 shadow-krishi-sm animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground">{doctor.name}</h3>
                    <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-medium text-primary">⭐ {doctor.rating}</span>
                    <p className="text-xs text-muted-foreground">{doctor.distance}</p>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-3">
                  <Button 
                    size="sm" 
                    className="flex-1 gap-2 gradient-primary text-primary-foreground"
                    onClick={() => openMaps(doctor.name)}
                  >
                    <MapPin className="w-4 h-4" />
                    {t('openMaps')}
                  </Button>
                  <Button 
                    variant="outline"
                    size="sm" 
                    className="gap-2"
                    onClick={() => window.open(`tel:${doctor.phone}`, '_blank')}
                  >
                    📞 Call
                  </Button>
                </div>
              </div>
            ))}
          </TabsContent>

          {/* Wrong Sprays to Avoid */}
          <TabsContent value="avoid" className="p-5 space-y-4 mt-0">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">{t('wrongSprays')}</h2>
              <ReadAloudButton 
                text={remediesData.wrongSprays.map(s => `Avoid ${s.name}: ${s.reason}`).join('. ')} 
                size="sm" 
              />
            </div>
            
            <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-4 mb-4">
              <p className="text-sm text-destructive font-medium flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Do NOT use these on your infected crop
              </p>
            </div>

            {remediesData.wrongSprays.map((spray, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-4 shadow-krishi-sm border-l-4 border-destructive animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{spray.icon}</span>
                  <div>
                    <h3 className="font-semibold text-foreground">{spray.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{spray.reason}</p>
                  </div>
                </div>
              </div>
            ))}
          </TabsContent>
        </Tabs>

        {/* Bottom CTA */}
        <div className="sticky bottom-20 px-5 py-4 bg-gradient-to-t from-background via-background to-transparent">
          <Button 
            onClick={() => navigate('/expert')}
            className="w-full h-14 text-lg font-semibold gradient-primary text-primary-foreground rounded-2xl shadow-krishi-primary"
          >
            Get Expert Consultation
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Remedies;
