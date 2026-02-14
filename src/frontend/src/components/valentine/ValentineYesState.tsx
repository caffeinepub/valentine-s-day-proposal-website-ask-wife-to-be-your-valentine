import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Sparkles } from 'lucide-react';
import CelebrationHearts from './CelebrationHearts';

interface ValentineYesStateProps {
  onBack: () => void;
}

export default function ValentineYesState({
  onBack,
}: ValentineYesStateProps) {
  return (
    <>
      <CelebrationHearts />
      
      <Card className="w-full shadow-romantic border-2 border-primary/30 bg-card/95 backdrop-blur-sm animate-in fade-in zoom-in duration-500">
        <CardHeader className="text-center space-y-4 pb-4">
          <div className="flex justify-center">
            <div className="relative">
              <Heart className="w-20 h-20 md:w-24 md:h-24 text-primary fill-primary animate-pulse-heart" />
              <Sparkles className="w-8 h-8 text-accent absolute -top-2 -right-2 animate-pulse" />
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-8 pb-8 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary leading-tight">
              You said Yes! 💕
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/90 font-serif italic max-w-2xl mx-auto px-4">
              You've made this the happiest Valentine's Day ever!
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto px-4 pt-4">
              This Valentine's Day is going to be absolutely magical because we get to spend it together. 
              Here's to love, laughter, and a lifetime of beautiful moments! ❤️
            </p>
          </div>
          
          <div className="flex justify-center pt-4">
            <Button
              variant="outline"
              onClick={onBack}
              className="font-serif"
            >
              Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
