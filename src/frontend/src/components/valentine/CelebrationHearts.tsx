import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface FloatingHeart {
  id: number;
  left: number;
  delay: number;
  size: number;
}

export default function CelebrationHearts() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    // Generate 15 hearts with random positions and delays
    const newHearts: FloatingHeart[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      size: 20 + Math.random() * 20,
    }));
    
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50" aria-hidden="true">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-0 animate-float-up"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          <Heart
            className="text-primary fill-primary opacity-80"
            style={{
              width: `${heart.size}px`,
              height: `${heart.size}px`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
