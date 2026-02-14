import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

interface ValentineQuestionCardProps {
  onYes: () => void;
  onNo: () => void;
}

export default function ValentineQuestionCard({
  onYes,
  onNo,
}: ValentineQuestionCardProps) {
  return (
    <Card className="w-full shadow-romantic border-2 border-primary/20 bg-card/95 backdrop-blur-sm">
      <CardHeader className="text-center space-y-4 pb-4">
        {/* Decorative seal */}
        <div className="flex justify-center">
          <img
            src="/assets/generated/love-seal-infinity-stamp.dim_256x256.png"
            alt=""
            aria-hidden="true"
            className="w-16 h-16 md:w-20 md:h-20 object-contain opacity-90"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      </CardHeader>
      
      <CardContent className="space-y-8 pb-8 relative">
        {/* Decorative pig plushies - all positioned in top area */}
        <img
          src="/assets/generated/pig-plushie-bunny.dim_256x256.png"
          alt=""
          aria-hidden="true"
          className="absolute top-2 left-2 w-10 h-10 md:w-14 md:h-14 object-contain opacity-70 pointer-events-none -z-10"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <img
          src="/assets/generated/pig-plushie-angel.dim_256x256.png"
          alt=""
          aria-hidden="true"
          className="absolute top-4 right-4 w-9 h-9 md:w-12 md:h-12 object-contain opacity-65 pointer-events-none -z-10"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <img
          src="/assets/generated/pig-plushie-stack.dim_256x256.png"
          alt=""
          aria-hidden="true"
          className="absolute top-0 left-1/4 w-8 h-8 md:w-11 md:h-11 object-contain opacity-60 pointer-events-none -z-10"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <img
          src="/assets/generated/pig-plushie-blanket.dim_256x256.png"
          alt=""
          aria-hidden="true"
          className="absolute top-1 right-1/4 w-11 h-11 md:w-15 md:h-15 object-contain opacity-75 pointer-events-none -z-10"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <img
          src="/assets/generated/pig-plushie-external-1.dim_256x256.png"
          alt=""
          aria-hidden="true"
          className="absolute top-6 left-1/2 -translate-x-1/2 w-7 h-7 md:w-10 md:h-10 object-contain opacity-55 pointer-events-none -z-10"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        
        {/* Heart bouquet illustration */}
        <div className="flex justify-center">
          <img
            src="/assets/generated/heart-bouquet.dim_800x800.png"
            alt=""
            aria-hidden="true"
            className="w-48 h-48 md:w-64 md:h-64 object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
        
        {/* Main question */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary leading-tight">
            Will you be my Valentine?
          </h1>
          
          {/* Predefined message template */}
          <div className="max-w-2xl mx-auto px-4 pt-4">
            <h2 className="text-lg md:text-xl font-serif font-semibold text-foreground mb-3">
              Message
            </h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              Pandi felloww, the way you say "eeee" and get all excited when you see dogs or anything cute just makes me smile every time — it's honestly my favorite thing. I love seeing that side of you. Being with you feels easy and comforting, and I'm really lucky to have you. I love you ❤️
            </p>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button
            size="lg"
            onClick={onYes}
            className="w-full sm:w-auto text-lg px-12 py-6 font-serif shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <Heart className="mr-2 h-5 w-5 fill-current" />
            Yes!
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            onClick={onNo}
            className="w-full sm:w-auto text-lg px-12 py-6 font-serif shadow-md hover:shadow-lg transition-all"
          >
            Maybe later...
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
