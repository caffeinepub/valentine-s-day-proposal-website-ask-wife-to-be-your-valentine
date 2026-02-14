import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HeartCrack, Sparkles } from 'lucide-react';

interface ValentineNoStateProps {
  onBack: () => void;
}

export default function ValentineNoState({
  onBack,
}: ValentineNoStateProps) {
  return (
    <Card className="w-full shadow-romantic border-2 border-accent/30 bg-card/95 backdrop-blur-sm animate-in fade-in zoom-in duration-500">
      <CardHeader className="text-center space-y-4 pb-4">
        <div className="flex justify-center">
          <div className="relative">
            <HeartCrack className="w-20 h-20 md:w-24 md:h-24 text-accent" />
            <Sparkles className="w-6 h-6 text-primary absolute -top-1 -right-1 animate-pulse" />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-8 pb-8 text-center">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-accent leading-tight">
            Maybe later? 🥺
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/90 font-serif italic max-w-2xl mx-auto px-4">
            That's okay! Take all the time you need.
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto px-4 pt-2">
            The offer stands whenever you're ready. After all, every day feels like Valentine's Day! 💝
          </p>
          
          <p className="text-sm md:text-base text-muted-foreground/80 max-w-md mx-auto px-4 pt-4 italic">
            (But seriously, hoping you'll reconsider... 😊)
          </p>
        </div>
        
        <div className="flex justify-center gap-4 pt-4">
          <Button
            onClick={onBack}
            className="font-serif"
          >
            Let me think again...
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
