import FreedomCalculator from '@/components/freedom-calculator';
import ScrollToTop from '@/components/scroll-to-top';

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 py-8">
          <header className="mb-4 md:mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Freedom Number
            </h1>
            <p className="md:mt-4 md:text-lg text-muted-foreground">
              See when you could achieve financial independence
            </p>
          </header>
          <FreedomCalculator />
          <ScrollToTop />
        </div>
      </main>
    </>
  );
}
