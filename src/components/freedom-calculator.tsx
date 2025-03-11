'use client';
import AgeSlider from './age-slider';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import ReturnRateSelector from './return-rate-selector';
// import WithdrawalRateSelector from './withdrawal-rate-selector';
import RiskToleranceToggle from './risk-tolerance-toggle';
import MonthlyExpensesTable from './monthly-expenses-table';
import MonthlyInvestmentsTable from './monthly-investments-table';
import { v4 as uuidv4 } from 'uuid';
import InvestmentHoldingsTable from './investment-holdings-table';
import FreedomResults from './freedom-results';
// import InvestmentGrowthChart from './investment-growth-chart';
import { useLocalStorage } from '@/hooks/use-local-storage';
import Footer from './footer';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { HelpCircle } from 'lucide-react';

export default function FreedomCalculator() {
  const [currentAge, setCurrentAge] = useLocalStorage(
    'freedom-current-age',
    30
  );
  const [returnRate, setReturnRate] = useLocalStorage(
    'freedom-return-rate',
    0.06
  );
  // const [withdrawalRate, setWithdrawalRate] = useState(0.04);
  const [isConservative, setIsConservative] = useLocalStorage(
    'freedom-is-convservative',
    true
  );
  const [monthlyExpenses, setMonthlyExpenses] = useLocalStorage(
    'freedom-monthly-expenses',
    [
      { id: uuidv4(), category: 'Housing', amount: 2000 },
      { id: uuidv4(), category: 'Food', amount: 400 },
      { id: uuidv4(), category: 'Transportation', amount: 300 },
      { id: uuidv4(), category: 'Utilities', amount: 200 },
      { id: uuidv4(), category: 'Entertainment', amount: 300 },
      { id: uuidv4(), category: 'Travel', amount: 300 },
      { id: uuidv4(), category: 'Miscellaneous', amount: 1500 },
    ]
  );
  const [currentInvestments, setCurrentInvestments] = useLocalStorage(
    'freedom-current-investments',
    [
      { id: uuidv4(), account: '401(k)', amount: 10000 },
      { id: uuidv4(), account: 'IRA', amount: 50000 },
      { id: uuidv4(), account: 'Brokerage', amount: 10000 },
      { id: uuidv4(), account: 'Other', amount: 1000 },
    ]
  );
  const [monthlyInvestments, setMonthlyInvestments] = useLocalStorage(
    'freedom-monthly-investments',
    [
      { id: uuidv4(), account: '401(k)', amount: 500 },
      { id: uuidv4(), account: 'IRA', amount: 500 },
      { id: uuidv4(), account: 'Brokerage', amount: 500 },
      { id: uuidv4(), account: 'Other', amount: 100 },
    ]
  );
  const [totalMonthlyExpenses, setTotalMonthlyExpenses] = useState(0);
  const [totalCurrentInvestments, setTotalCurrentInvestments] = useState(0);
  const [totalMonthlyInvestments, setTotalMonthlyInvestments] = useState(0);

  // Calculated Values
  const [freedomNumber, setFreedomNumber] = useState(0);
  const [freedomAge, setFreedomAge] = useState(0);
  const [growthData, setGrowthData] = useState<any[]>([]);

  // When the monthlyExpenses change, resum the totalmonthlyExpenses
  useEffect(() => {
    const total = monthlyExpenses.reduce(
      (sum, expense) => sum + expense.amount,
      0
    );
    setTotalMonthlyExpenses(total);
  }, [monthlyExpenses]);

  // When the currentInvestments change, resum the totalcurrentInvestments
  useEffect(() => {
    const total = currentInvestments.reduce(
      (sum, invest) => sum + invest.amount,
      0
    );
    setTotalCurrentInvestments(total);
  }, [currentInvestments]);

  // When the monthlyInvestments change, resum the totalmonthlyInvestments
  useEffect(() => {
    const total = monthlyInvestments.reduce(
      (sum, invest) => sum + invest.amount,
      0
    );
    setTotalMonthlyInvestments(total);
  }, [monthlyInvestments]);

  // Calculate Freedom Number and Age
  useEffect(() => {
    if (totalCurrentInvestments === 0 && totalMonthlyInvestments === 0) {
      setFreedomNumber(0);
      setFreedomAge(0);
      setGrowthData([]);
      return;
    }
    // Calc freedom number based on risk tolerance
    const annualExpenses = totalMonthlyExpenses * 12;
    const riskMultiplier = isConservative ? 30 : 25;
    const calculatedFreedomNumber = annualExpenses * riskMultiplier;
    setFreedomNumber(calculatedFreedomNumber);

    // Calc growth year by year to find freedom age
    let age = currentAge;
    let currentTotal = totalCurrentInvestments;
    const growthDataPoints = []; // Array objects that includes growth of totalCurrentInvestments each year

    // Iterate through each year until your total investments reach the freedom number
    while (currentTotal < calculatedFreedomNumber && age < 100) {
      currentTotal += totalMonthlyInvestments * 12;
      currentTotal *= 1 + returnRate;
      age++;

      growthDataPoints.push({
        age,
        value: currentTotal,
        freedomNumber: calculatedFreedomNumber,
      });
    }

    setFreedomAge(age < 100 ? age : 0);
    setGrowthData(growthDataPoints);
    // console.log(growthDataPoints);
  }, [
    totalCurrentInvestments,
    totalMonthlyInvestments,
    returnRate,
    currentAge,
    totalMonthlyExpenses,
    isConservative,
  ]);

  return (
    <main className="space-y-8 relative">
      {/* Results */}
      <div className=" border shadow-inner p-4 rounded-2xl bg-accent">
        <FreedomResults freedomNumber={freedomNumber} freedomAge={freedomAge} />
      </div>

      <h2 className="text-2xl font-bold text-center mb-5 tracking-wide">
        Modify Inputs:
      </h2>

      {/* Inputs */}
      <div className="grid gap-8 md:grid-cols-2">
        <section className="flex flex-col gap-6">
          {/* Age Slider */}
          <Card className="">
            <CardHeader>
              <CardTitle>Your Age</CardTitle>
            </CardHeader>
            <CardContent>
              <AgeSlider
                currentAge={currentAge}
                setCurrentAge={setCurrentAge}
              />
            </CardContent>
          </Card>
          {/* Investment Assumption Section */}
          <Card>
            <CardHeader>
              <CardTitle>Investment Assumptions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-2 font-medium">Investment Return Rate</h3>
                <ReturnRateSelector
                  returnRate={returnRate}
                  setReturnRate={setReturnRate}
                />
              </div>
              <div>
                <h3 className="mb-2 font-medium">Risk Tolerance</h3>
                <RiskToleranceToggle
                  isConservative={isConservative}
                  setIsConservative={setIsConservative}
                />
              </div>
            </CardContent>
          </Card>
          {/* Monthly Expenses */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Expenses</CardTitle>
              <CardDescription>
                What are your expected monthly expenses in retirement?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <MonthlyExpensesTable
                monthlyExpenses={monthlyExpenses}
                setMonthlyExpenses={setMonthlyExpenses}
                totalMonthlyExpenses={totalMonthlyExpenses}
              />
            </CardContent>
          </Card>
        </section>
        <section className="flex flex-col gap-6">
          {/* Your Investments */}
          <Card>
            <CardHeader>
              <CardTitle>Your Investments</CardTitle>
              <CardDescription>
                Enter your current investment holdings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <InvestmentHoldingsTable
                currentInvestments={currentInvestments}
                setCurrentInvestments={setCurrentInvestments}
                totalCurrentInvestments={totalCurrentInvestments}
              />
            </CardContent>
          </Card>
          {/* Monthly Contributions */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Contributions</CardTitle>
              <CardDescription className="flex items-center gap-2">
                How much are you investing each month?
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={'ghost'}
                      size={'icon'}
                      className="h-6 w-6 text-primary"
                    >
                      <HelpCircle className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className='space-y-2'>
                      <h4 className="font-medium">Monthly Contributions</h4>
                      <div className="text-sm text-muted-foreground">
                        Assumes you continue investing the same monthly until you
                        reach your Freedom Age.
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <MonthlyInvestmentsTable
                monthlyInvestments={monthlyInvestments}
                setMonthlyInvestments={setMonthlyInvestments}
                totalMonthlyInvestments={totalMonthlyInvestments}
              />
            </CardContent>
          </Card>
        </section>
      </div>
      <Footer />
    </main>
  );
}
