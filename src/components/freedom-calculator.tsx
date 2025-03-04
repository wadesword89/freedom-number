'use client';

import AgeSlider from './age-slider';
import { useState } from 'react';
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
import { v4 as uuidv4 } from 'uuid';

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
    { id: uuidv4(), category: 'Savings', amount: 500 },
    { id: uuidv4(), category: 'Miscellaneous', amount: 200 },
  ]);

  // Add the totalMonthlyExpenses state after the other calculated values
  const [totalMonthlyExpenses, setTotalMonthlyExpenses] = useState(0);

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
              expenses={monthlyExpenses}
              setExpenses={setMonthlyExpenses}
              total={totalMonthlyExpenses}
            />
          </CardContent>
        </Card>
      </section>

      <section className="flex flex-col gap-6">
        {/* Your Investment Holdings */}
        <Card>
          <CardHeader>
            <CardTitle>Your Investments</CardTitle>
            <CardDescription>
              Edit your current investment holdings
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
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
            <p>Card Content</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
