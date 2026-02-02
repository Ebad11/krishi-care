import { ArrowLeft, AlertTriangle, Shield, Clock, MapPin, Share2, BookmarkPlus, Volume2, TrendingUp, Target, Calendar } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import MobileLayout from "@/components/layout/MobileLayout";
import { Button } from "@/components/ui/button";
import TranslateButton from "@/components/common/TranslateButton";
import ReadAloudButton from "@/components/common/ReadAloudButton";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";

const diseaseData = {
  name: "Early Blight",
  scientificName: "Alternaria solani",
  crop: "Tomato",
  confidence: 94,
  severity: "Moderate",
  severityLevel: 2, // 1-3
  stage: "Early-Mid",
  stageNumber: 2, // 1-4
  spreadRisk: "High",
  spreadRiskLevel: 3, // 1-3
  warningRadius: "500m",
  affectedArea: "25%",
  timeline: [
    { day: "Day 1-3", event: "Spots appear on lower leaves", status: "completed" },
    { day: "Day 4-7", event: "Spread to upper leaves", status: "current" },
    { day: "Day 8-14", event: "Stem infection begins", status: "upcoming" },
    { day: "Day 15+", event: "Fruit damage possible", status: "upcoming" },
  ],
  description: "Early blight is a common fungal disease affecting tomatoes. It causes brown spots with concentric rings on older leaves, which can spread to stems and fruit. The disease thrives in warm, humid conditions and can significantly reduce crop yield if left untreated.",
  symptoms: [
    "Brown spots with concentric rings",
    "Yellowing around lesions",
    "Leaf curling and wilting",
    "Dark lesions on stems",
  ],
};

const Result = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { t } = useLanguage();

  const handleSaveReport = () => {
    toast.success("Report saved successfully!");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Disease Report: ${diseaseData.name}`,
        text: `Detected ${diseaseData.name} on ${diseaseData.crop} with ${diseaseData.confidence}% confidence`,
      });
    } else {
      toast.success("Link copied to clipboard!");
    }
  };

  const getSeverityColor = (level: number) => {
    const colors = ["text-primary", "text-krishi-warning", "text-destructive"];
    return colors[level - 1] || colors[0];
  };

  const fullDescription = `${diseaseData.name}. ${diseaseData.description} Severity: ${diseaseData.severity}. Stage: ${diseaseData.stage}. Spread Risk: ${diseaseData.spreadRisk}.`;

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
            <TranslateButton />
            <ReadAloudButton text={fullDescription} size="md" />
            <button 
              onClick={handleShare}
              className="p-2 bg-card/90 backdrop-blur-sm rounded-xl shadow-krishi-sm"
            >
              <Share2 className="w-5 h-5 text-foreground" />
            </button>
            <button 
              onClick={handleSaveReport}
              className="p-2 bg-card/90 backdrop-blur-sm rounded-xl shadow-krishi-sm"
            >
              <BookmarkPlus className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        {/* Disease Info Card */}
        <div className="px-5 -mt-8 relative z-10">
          <div className="bg-card rounded-3xl p-5 shadow-krishi-lg animate-slide-up">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-sm text-muted-foreground">{t('diseaseDetected')}</span>
                <h1 className="text-2xl font-bold text-foreground mt-1">{diseaseData.name}</h1>
                <p className="text-sm text-muted-foreground mt-1">{diseaseData.crop} • {diseaseData.scientificName}</p>
              </div>
              <div className="flex items-center gap-2 bg-krishi-warning/10 px-3 py-2 rounded-xl">
                <AlertTriangle className="w-5 h-5 text-krishi-warning" />
                <span className="text-sm font-semibold text-krishi-warning">{diseaseData.severity}</span>
              </div>
            </div>

            {/* Confidence */}
            <div className="mt-5">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-muted-foreground">{t('confidence')}</span>
                <span className="font-semibold text-primary">{diseaseData.confidence}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full gradient-primary rounded-full transition-all duration-1000"
                  style={{ width: `${diseaseData.confidence}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="px-5 mt-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
          <div className="grid grid-cols-2 gap-3">
            {/* Severity */}
            <div className="bg-card rounded-2xl p-4 shadow-krishi-sm">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-krishi-warning" />
                <span className="text-sm text-muted-foreground">{t('severity')}</span>
              </div>
              <p className="font-bold text-lg text-foreground">{diseaseData.severity}</p>
              <div className="flex gap-1 mt-2">
                {[1, 2, 3].map((level) => (
                  <div
                    key={level}
                    className={`h-1.5 flex-1 rounded-full ${
                      level <= diseaseData.severityLevel
                        ? level === 1 ? "bg-primary" : level === 2 ? "bg-krishi-warning" : "bg-destructive"
                        : "bg-secondary"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Stage */}
            <div className="bg-card rounded-2xl p-4 shadow-krishi-sm">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">{t('stage')}</span>
              </div>
              <p className="font-bold text-lg text-foreground">{diseaseData.stage}</p>
              <div className="flex gap-1 mt-2">
                {[1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    className={`h-1.5 flex-1 rounded-full ${
                      level <= diseaseData.stageNumber ? "bg-primary" : "bg-secondary"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Spread Risk */}
            <div className="bg-card rounded-2xl p-4 shadow-krishi-sm">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-5 h-5 text-destructive" />
                <span className="text-sm text-muted-foreground">{t('spreadRisk')}</span>
              </div>
              <p className="font-bold text-lg text-foreground">{diseaseData.spreadRisk}</p>
              <p className="text-xs text-muted-foreground mt-1">Affected: {diseaseData.affectedArea}</p>
            </div>

            {/* Warning Radius */}
            <div className="bg-card rounded-2xl p-4 shadow-krishi-sm">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-krishi-sky" />
                <span className="text-sm text-muted-foreground">{t('warningRadius')}</span>
              </div>
              <p className="font-bold text-lg text-foreground">{diseaseData.warningRadius}</p>
              <p className="text-xs text-destructive mt-1">⚠️ Alert nearby farmers</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="px-5 mt-6 animate-slide-up" style={{ animationDelay: "200ms" }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">{t('timeline')}</h2>
            <ReadAloudButton 
              text={diseaseData.timeline.map(t => `${t.day}: ${t.event}`).join('. ')} 
              size="sm" 
            />
          </div>
          <div className="bg-card rounded-2xl p-4 shadow-krishi-sm">
            <div className="space-y-4">
              {diseaseData.timeline.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`w-3 h-3 rounded-full mt-1.5 ${
                    item.status === "completed" ? "bg-primary" :
                    item.status === "current" ? "bg-krishi-warning animate-pulse" :
                    "bg-secondary"
                  }`} />
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${
                      item.status === "current" ? "text-foreground" : "text-muted-foreground"
                    }`}>
                      {item.day}
                    </p>
                    <p className={`text-sm ${
                      item.status === "completed" ? "text-muted-foreground" :
                      item.status === "current" ? "text-foreground font-medium" :
                      "text-muted-foreground"
                    }`}>
                      {item.event}
                    </p>
                  </div>
                  {item.status === "current" && (
                    <span className="text-xs bg-krishi-warning/10 text-krishi-warning px-2 py-1 rounded-full">
                      Now
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="px-5 mt-6 animate-slide-up" style={{ animationDelay: "300ms" }}>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-foreground">{t('aboutDisease')}</h2>
            <ReadAloudButton text={diseaseData.description} size="sm" />
          </div>
          <div className="bg-card rounded-2xl p-4 shadow-krishi-sm">
            <p className="text-muted-foreground leading-relaxed text-sm">
              {diseaseData.description}
            </p>
            <div className="mt-4">
              <p className="text-sm font-medium text-foreground mb-2">Symptoms:</p>
              <ul className="space-y-1">
                {diseaseData.symptoms.map((symptom, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {symptom}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-5 mt-6 pb-6 space-y-3 animate-slide-up" style={{ animationDelay: "400ms" }}>
          <Button 
            onClick={() => navigate(`/remedies/${id || '1'}`)}
            className="w-full h-14 text-lg font-semibold gradient-primary text-primary-foreground rounded-2xl shadow-krishi-primary"
          >
            {t('viewRemedies')}
          </Button>
          
          <Button 
            onClick={handleSaveReport}
            variant="outline"
            className="w-full h-14 text-lg font-semibold rounded-2xl border-2"
          >
            <BookmarkPlus className="w-5 h-5 mr-2" />
            {t('saveReport')}
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Result;
