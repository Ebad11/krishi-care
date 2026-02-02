import { useState } from "react";
import { Camera, Upload, X, Zap, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MobileLayout from "@/components/layout/MobileLayout";
import { Button } from "@/components/ui/button";

const Scan = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleScan = () => {
    setIsScanning(true);
    // Simulate scanning process
    setTimeout(() => {
      navigate("/result/1");
    }, 2500);
  };

  const clearImage = () => {
    setSelectedImage(null);
    setIsScanning(false);
  };

  return (
    <MobileLayout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="flex items-center justify-between p-5 pt-6 border-b border-border">
          <h1 className="text-xl font-bold text-foreground">Scan Crop</h1>
          <button className="p-2 bg-secondary rounded-xl hover:bg-muted transition-colors">
            <Info className="w-5 h-5 text-muted-foreground" />
          </button>
        </header>

        <div className="p-5 space-y-6">
          {/* Scan Area */}
          <div className="relative">
            {selectedImage ? (
              <div className="relative rounded-3xl overflow-hidden bg-secondary aspect-[4/3]">
                <img
                  src={selectedImage}
                  alt="Selected crop"
                  className="w-full h-full object-cover"
                />
                {isScanning && (
                  <div className="absolute inset-0 bg-primary/20">
                    <div className="absolute left-0 right-0 h-1 bg-primary animate-scan-line shadow-krishi-primary" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-card/90 backdrop-blur-sm rounded-2xl px-6 py-4 text-center">
                        <Zap className="w-8 h-8 text-primary mx-auto animate-pulse" />
                        <p className="text-sm font-medium text-foreground mt-2">Analyzing...</p>
                        <p className="text-xs text-muted-foreground">AI is detecting diseases</p>
                      </div>
                    </div>
                  </div>
                )}
                {!isScanning && (
                  <button
                    onClick={clearImage}
                    className="absolute top-3 right-3 p-2 bg-card/90 backdrop-blur-sm rounded-full shadow-krishi-sm"
                  >
                    <X className="w-5 h-5 text-foreground" />
                  </button>
                )}
              </div>
            ) : (
              <div className="rounded-3xl border-2 border-dashed border-primary/30 bg-krishi-green-light/30 aspect-[4/3] flex flex-col items-center justify-center p-8">
                <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mb-4 shadow-krishi-primary animate-float">
                  <Camera className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground text-center">
                  Capture or Upload
                </h3>
                <p className="text-sm text-muted-foreground text-center mt-2">
                  Take a photo of your crop leaf to detect diseases
                </p>
              </div>
            )}
          </div>

          {/* Tips */}
          <div className="bg-secondary rounded-2xl p-4">
            <h3 className="font-semibold text-foreground mb-3">📸 Tips for better results</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Take clear, well-lit photos of affected leaves
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Include both healthy and diseased parts if visible
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Avoid blurry or shadowy images
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            {selectedImage ? (
              <Button
                onClick={handleScan}
                disabled={isScanning}
                className="w-full h-14 text-lg font-semibold gradient-primary text-primary-foreground rounded-2xl shadow-krishi-primary hover:opacity-90 transition-opacity"
              >
                {isScanning ? (
                  <>
                    <Zap className="w-5 h-5 mr-2 animate-pulse" />
                    Scanning...
                  </>
                ) : (
                  <>
                    <Zap className="w-5 h-5 mr-2" />
                    Analyze Disease
                  </>
                )}
              </Button>
            ) : (
              <>
                <label className="block">
                  <input
                    type="file"
                    accept="image/*"
                    capture="environment"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <div className="w-full h-14 text-lg font-semibold gradient-primary text-primary-foreground rounded-2xl shadow-krishi-primary flex items-center justify-center gap-2 cursor-pointer hover:opacity-90 transition-opacity">
                    <Camera className="w-5 h-5" />
                    Take Photo
                  </div>
                </label>
                
                <label className="block">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <div className="w-full h-14 text-lg font-semibold bg-card border-2 border-primary text-primary rounded-2xl flex items-center justify-center gap-2 cursor-pointer hover:bg-krishi-green-light transition-colors">
                    <Upload className="w-5 h-5" />
                    Upload from Gallery
                  </div>
                </label>
              </>
            )}
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Scan;
