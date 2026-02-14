import { useState } from 'react';
import ValentineLayout from './components/valentine/ValentineLayout';
import ValentineQuestionCard from './components/valentine/ValentineQuestionCard';
import ValentineYesState from './components/valentine/ValentineYesState';
import ValentineNoState from './components/valentine/ValentineNoState';

type ViewState = 'question' | 'yes' | 'no';

function App() {
  const [viewState, setViewState] = useState<ViewState>('question');

  const handleYes = () => setViewState('yes');
  const handleNo = () => setViewState('no');
  const handleBack = () => setViewState('question');

  return (
    <ValentineLayout>
      <div className="w-full max-w-4xl mx-auto px-4 py-8 md:py-12">
        {viewState === 'question' && (
          <ValentineQuestionCard
            onYes={handleYes}
            onNo={handleNo}
          />
        )}
        
        {viewState === 'yes' && (
          <ValentineYesState
            onBack={handleBack}
          />
        )}
        
        {viewState === 'no' && (
          <ValentineNoState
            onBack={handleBack}
          />
        )}
      </div>
      
      <footer className="fixed bottom-0 left-0 right-0 py-4 text-center text-sm text-muted-foreground bg-background/80 backdrop-blur-sm border-t border-border">
        <p>
          Built with <span className="text-primary animate-pulse-heart inline-block">♥</span> using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary transition-colors"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </ValentineLayout>
  );
}

export default App;
