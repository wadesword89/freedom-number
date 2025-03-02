'use client';

import { Button } from '@/components/ui/button';
import { HelpCircle } from 'lucide-react';
import Link from 'next/link';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface WithdrawalRateSelectorProps {
  withdrawalRate: number;
  setWithdrawalRate: (rate: number) => void;
}

export default function WithdrawalRateSelector({
  withdrawalRate,
  setWithdrawalRate,
}: WithdrawalRateSelectorProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="text-sm text-slate-600 dark:text-slate-400">
          Future withdrawal rate in retirement
        </span>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <HelpCircle className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-medium">Withdrawal Rate</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                The withdrawal rate is the percentage of your portfolio you plan
                to withdraw each year in retirement.
              </p>
              <ul className="list-disc pl-4 text-sm text-slate-600 dark:text-slate-400">
                <li>
                  4% is the traditional safe withdrawal rate based on the{' '}
                  <Link
                    href={'https://en.wikipedia.org/wiki/Trinity_study'}
                    className="underline"
                    target="_blank"
                  >
                    Trinity Study
                  </Link>
                  .
                </li>
                <li>
                  3.5% is a more conservative approach, which may be safer for
                  longer retirements or uncertain market conditions.
                </li>
                <li>
                  Your actual safe withdrawal rate may vary based on market
                  conditions, retirement length, and asset allocation.
                </li>
              </ul>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button
          variant={withdrawalRate === 0.035 ? 'default' : 'outline'}
          className="h-12 text-lg"
          onClick={() => setWithdrawalRate(0.035)}
        >
          3.5%
        </Button>
        <Button
          variant={withdrawalRate === 0.04 ? 'default' : 'outline'}
          className="h-12 text-lg"
          onClick={() => setWithdrawalRate(0.04)}
        >
          4%
        </Button>
      </div>
    </div>
  );
}
