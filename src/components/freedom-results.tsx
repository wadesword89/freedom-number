'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { formatCurrency } from '@/lib/utils';
import { PartyPopper, Trophy } from 'lucide-react';

export default function FreedomResults({
  freedomNumber,
  freedomAge,
}) {

  const getAgeMessage = () => {
    if (freedomAge === 0) return 'Keep investing to reach your goal!';
    if (freedomAge < 50) return 'Early Retirement Achieved! 🚀';
    if (freedomAge < 60) return 'Financial Independence on the Horizon! 🌅';
    return 'On track for traditional retirement! 🎯';
  };

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Your Freedom Number</CardTitle>
          <CardDescription>
            The amount you need to be financially independent
          </CardDescription>
        </CardHeader>
        <CardContent className="">
          <div className="flex items-center justify-center py-8">
            <Trophy className="mr-2 h-8 w-8 text-yellow-500" />
            <span className="text-5xl font-bold tracking-tight">
              {formatCurrency(freedomNumber)}
            </span>
          </div>
        </CardContent>
      </Card>

      {freedomAge > 0 && (
        <Card className="overflow-hidden">
          <CardHeader>
            <CardTitle>Your Freedom Age</CardTitle>
            <CardDescription>
              When you&apos;ll reach financial independence
            </CardDescription>
          </CardHeader>
          <CardContent className="">
            <div className="flex items-center justify-center py-8">
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <PartyPopper className="mr-2 h-8 w-8 text-pink-500" />
                  <span className="text-5xl font-bold tracking-tight">
                    {freedomAge > 0 ? freedomAge : '—'}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {getAgeMessage()}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
