import { Button } from '@/components/Elements';

export const BackToTopSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex justify-center py-12">
      <Button onClick={scrollToTop}>Back to Top</Button>
    </div>
  );
};
