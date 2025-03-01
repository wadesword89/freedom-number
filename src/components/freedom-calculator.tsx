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

export default function FreedomCalculator() {
  const [currentAge, setCurrentAge] = useState(30);
  const [returnRate, setReturnRate] = useState(0.07); // 7% default
  const [withdrawalRate, setWithdrawalRate] = useState(0.04); // 4% default
  const [isConservative, setIsConservative] = useState(false);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Current Age</CardTitle>
        </CardHeader>
        <CardContent>
          <AgeSlider currentAge={currentAge} setCurrentAge={setCurrentAge} />
        </CardContent>
      </Card>
    </>
  );
}
