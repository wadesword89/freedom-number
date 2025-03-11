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
import { Button } from './ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { HelpCircle } from 'lucide-react';

export default function FreedomResults({ freedomNumber, freedomAge }) {
  const getAgeMessage = () => {
    if (freedomAge === 0) return 'Invest more to reach your goal! 🎯';
    if (freedomAge < 50) return 'Early Retirement Achieved! 🚀';
    if (freedomAge < 60) return 'Financial Freedom on the Horizon! 🌅';
    if (freedomAge < 70) return 'On track for traditional retirement! 🎯';
    return 'Invest more to reach your goal! 🎯';
  };

  return (
    <div className="grid sm:grid-cols-2 gap-8 ">
      <Card className="relative overflow-hidden">
        <CardHeader>
          <CardTitle>Your Freedom Number</CardTitle>
          <CardDescription className="flex items-center gap-2">
            The amount you need to be financially independent
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
                <div className="space-y-2">
                  <h4 className="font-medium">Freedom Number</h4>
                  <div className="text-sm text-muted-foreground">
                    Amount assumes no Social Security or pension income, and no
                    taxes on withdrawals
                  </div>
                </div>
              </PopoverContent>
            </Popover>
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

      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Your Freedom Age</CardTitle>
          <CardDescription className="flex items-center gap-2">
            When you&apos;ll reach financial independence
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
                <div className="space-y-2">
                  <h4 className="font-medium">Freedom Number</h4>
                  <div className="text-sm text-muted-foreground">
                    Assumes your portfolio grows at the selected return rate (6%
                    or 7%) and that you consistently invest stated monthly
                    contributions until you reach your Freedom Age.
                  </div>
                </div>
              </PopoverContent>
            </Popover>
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
                    <div className='text-5xl text-destructive'>100+</div>
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
    </div>
  );
}
