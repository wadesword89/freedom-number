'use client';

import { Button } from '@/components/ui/button';
import { HelpCircle } from 'lucide-react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface ReturnRateSelectorProps {
  returnRate: number;
  setReturnRate: (rate: number) => void;
}

export default function ReturnRateSelector({
  returnRate,
  setReturnRate,
}: ReturnRateSelectorProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="text-sm text-slate-600 dark:text-slate-400">
          Assumed annual return on investments
        </span>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <HelpCircle className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-medium">Investment Return Rate</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                This is the average annual return you expect from your
                investments over the long term.
              </p>

              <p className="text-sm text-slate-600 dark:text-slate-400">
                The S&P 500 has historically returned about 10% annually before
                inflation.
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Rates here are inflation-adjusted and assume steady, long-term
                market growth. No market crashes or downturns are accounted for.
              </p>

              <ul className="list-disc pl-4 text-sm text-slate-600 dark:text-slate-400">
                <li>6% is a conservative estimate</li>
                <li>7% is a moderate estimate</li>
                <li>Higher rates are possible but riskier.</li>
              </ul>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Button
          variant={returnRate === 0.06 ? 'default' : 'outline'}
          className="h-12 text-lg"
          onClick={() => setReturnRate(0.06)}
        >
          6%
        </Button>
        <Button
          variant={returnRate === 0.07 ? 'default' : 'outline'}
          className="h-12 text-lg"
          onClick={() => setReturnRate(0.07)}
        >
          7%
        </Button>
      </div>
    </div>
  );
}
