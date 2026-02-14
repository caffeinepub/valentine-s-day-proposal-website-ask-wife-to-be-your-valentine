import { type ReactNode } from 'react';

interface ValentineLayoutProps {
  children: ReactNode;
}

export default function ValentineLayout({ children }: ValentineLayoutProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background image with fallback gradient */}
      <div 
        className="fixed inset-0 z-0 bg-gradient-to-br from-accent/20 via-background to-secondary/30"
        style={{
          backgroundImage: 'url(/assets/generated/valentine-bg.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="fixed inset-0 z-0 bg-background/40 backdrop-blur-[2px]" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center pb-16">
        {children}
      </div>
    </div>
  );
}
