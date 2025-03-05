'use client';

import AgeSlider from './age-slider';
import { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import ReturnRateSelector from './return-rate-selector';
import WithdrawalRateSelector from './withdrawal-rate-selector';
import RiskToleranceToggle from './risk-tolerance-toggle';
import MonthlyExpensesTable from './monthly-expenses-table';
import MonthlyInvestmentsTable from './monthly-investments-table';
import { v4 as uuidv4 } from 'uuid';
import InvestmentHoldingsTable from './investment-holdings-table';

export default function FreedomCalculator() {
  const [currentAge, setCurrentAge] = useState(30);
  const [returnRate, setReturnRate] = useState(0.07);
  const [withdrawalRate, setWithdrawalRate] = useState(0.04);
  const [isConservative, setIsConservative] = useState(false);
  const [monthlyExpenses, setMonthlyExpenses] = useState([
    { id: uuidv4(), category: 'Housing', amount: 2000 },
    { id: uuidv4(), category: 'Food', amount: 400 },
    { id: uuidv4(), category: 'Transportation', amount: 300 },
    { id: uuidv4(), category: 'Utilities', amount: 100 },
    { id: uuidv4(), category: 'Entertainment', amount: 200 },
    { id: uuidv4(), category: 'Travel', amount: 300 },
    { id: uuidv4(), category: 'Miscellaneous', amount: 200 },
  ]);
  const [currentInvestments, setCurrentInvestments] = useState([
    { id: uuidv4(), account: '401(k)', amount: 10000 },
    { id: uuidv4(), account: 'IRA', amount: 50000 },
    { id: uuidv4(), account: 'Brokerage', amount: 10000 },
  ]);
  const [monthlyInvestments, setMonthlyInvestments] = useState([
    { id: uuidv4(), account: '401(k)', amount: 500 },
    { id: uuidv4(), account: 'IRA', amount: 500 },
    { id: uuidv4(), account: 'Brokerage', amount: 500 },
  ]);
  const [totalMonthlyExpenses, setTotalMonthlyExpenses] = useState(0);
  const [totalCurrentInvestments, setTotalCurrentInvestments] = useState(0);
  const [totalMonthlyInvestments, setTotalMonthlyInvestments] = useState(0);

  // When the monthlyExpenses change, resum the totalmonthlyExpenses
  useEffect(() => {
    const total = monthlyExpenses.reduce(
      (acc, expense) => acc + expense.amount,
      0
    );
    setTotalMonthlyExpenses(total);
  }, [monthlyExpenses]);

  // When the currentInvestments change, resum the totalcurrentInvestments
  useEffect(() => {
    const total = currentInvestments.reduce(
      (acc, expense) => acc + expense.amount,
      0
    );
    setTotalCurrentInvestments(total);
  }, [currentInvestments]);

  // When the monthlyInvestments change, resum the totalmonthlyInvestments
  useEffect(() => {
    const total = monthlyInvestments.reduce(
      (acc, expense) => acc + expense.amount,
      0
    );
    setTotalMonthlyInvestments(total);
  }, [monthlyInvestments]);

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <section className="flex flex-col gap-6">
        {/* Age Slider */}
        <Card>
          <CardHeader>
            <CardTitle>Your Age</CardTitle>
          </CardHeader>
          <CardContent>
            <AgeSlider currentAge={currentAge} setCurrentAge={setCurrentAge} />
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
              <h3 className="mb-2 font-medium">Withdrawal Rate</h3>
              <WithdrawalRateSelector
                withdrawalRate={withdrawalRate}
                setWithdrawalRate={setWithdrawalRate}
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
              Edit your current investment holdings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <InvestmentHoldingsTable 
              currentInvestments = {currentInvestments}
              setCurrentInvestments = {setCurrentInvestments}
              totalCurrentInvestments= {totalCurrentInvestments}
            />
          </CardContent>
        </Card>

        {/* Monthly Contributions */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Contributions</CardTitle>
            <CardDescription>
              How much are you investing each month?
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
  );
}
