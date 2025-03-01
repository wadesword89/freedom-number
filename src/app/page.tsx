import FreedomCalculator from '@/components/freedom-calculator';

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <div className="container mx-auto px-4 py-8">
          <header className="mb-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 md:text-5xl">
              Freedom Number
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Calculate when you can achieve{' '}
              <span className="">financial independence</span> ⛓️‍💥
            </p>
          </header>
          <FreedomCalculator />
        </div>
      </main>
    </>
  );
}
