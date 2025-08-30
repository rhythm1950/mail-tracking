import { ArrowUpIcon } from 'lucide-react';
import React from 'react';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import { Button } from '../ui/button';

export const ScrollToTop: React.FC = () => {
  const { isVisible, scrollToTop } = useScrollToTop();

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-brand-600 hover:bg-brand-700 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110"
      size="icon"
    >
      <ArrowUpIcon className="w-5 h-5 text-white" />
    </Button>
  );
};