import FreedomCalculator from '@/components/freedom-calculator';
import ScrollToTop from '@/components/scroll-to-top';

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-[#171717] to-[#1f2020] text-slate-300">
        <div className="container mx-auto px-4 py-8">
          <header className="mb-4 md:mb-8 text-center">
            <h1 className="text-3xl tracking-tight md:text-5xl bg-gradient-to-b from-white to-slate-400 bg-clip-text text-center font-medium text-transparent shadow-teal-200/30 drop-shadow-[0_0px_5px_var(--tw-shadow-color)]">
              Freedom Number
            </h1>
            <p className="md:mt-4 md:text-lg opacity-70">
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
