'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { formatCurrency } from '@/lib/utils';
import { PartyPopper } from 'lucide-react';
import { NumberTicker } from './magicui/number-ticker';
import { ConfettiButton } from './magicui/confetti';

export default function FreedomResults({ freedomNumber, freedomAge }) {
  const getAgeMessage = () => {
    if (freedomAge === 0) return 'Keep investing to reach your goal!';
    if (freedomAge < 50) return 'Early Retirement Achieved! 🚀';
    if (freedomAge < 60) return 'Financial Independence on the Horizon! 🌅';
    return 'On track for traditional retirement! 🎯';
  };

  return (
    <div className="grid sm:grid-cols-2 gap-8 ">
      <Card className="relative overflow-hidden">
        <CardHeader>
          <CardTitle>Your Freedom Number</CardTitle>
          <CardDescription>
            The amount you need to be financially independent
          </CardDescription>
        </CardHeader>
        <CardContent className="">
          <div className="flex items-center justify-center">
            {/* <Trophy className="mr-2 h-8 w-8 text-yellow-500 shrink-0" /> */}
            <span className="text-5xl font-bold tracking-tight text-green-500">
              {formatCurrency(freedomNumber).toString()}
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
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <ConfettiButton>
                    <PartyPopper className="h-8 w-8 text-pink-500 mr-2 hover:scale-105" />
                  </ConfettiButton>
                  <span className="text-5xl font-bold tracking-tight ">
                    {freedomAge > 0 ? (
                      <NumberTicker
                        className="text-pink-500"
                        value={freedomAge}
                      />
                    ) : (
                      '—'
                    )}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
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
