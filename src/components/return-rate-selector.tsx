'use client';

import { Button } from '@/components/ui/button';
import { HelpCircle } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

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
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <HelpCircle className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-xs">
                This is the average annual return you expect from your
                investments over the long term. The S&P 500 has historically
                returned about 10% annually before inflation.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Button
          variant={returnRate === 0.06 ? 'default' : 'outline'}
          className="h-16 text-lg"
          onClick={() => setReturnRate(0.06)}
        >
          6%
        </Button>
        <Button
          variant={returnRate === 0.07 ? 'default' : 'outline'}
          className="h-16 text-lg"
          onClick={() => setReturnRate(0.07)}
        >
          7%
        </Button>
      </div>
    </div>
  );
}
