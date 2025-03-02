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

export default function FreedomCalculator() {
  const [currentAge, setCurrentAge] = useState(30);
  const [returnRate, setReturnRate] = useState(0.07);
  const [withdrawalRate, setWithdrawalRate] = useState(0.04);
  const [isConservative, setIsConservative] = useState(false);

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Your Age</CardTitle>
        </CardHeader>
        <CardContent>
          <AgeSlider currentAge={currentAge} setCurrentAge={setCurrentAge} />
        </CardContent>
      </Card>

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
    </div>
  );
}
