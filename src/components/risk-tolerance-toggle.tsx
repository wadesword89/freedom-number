import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { HelpCircle } from 'lucide-react';

interface RiskToleranceToggleProps {
  isConservative: boolean;
  setIsConservative: (isConservative: boolean) => void;
}

export default function RiskToleranceToggle({
  isConservative,
  setIsConservative,
}: RiskToleranceToggleProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="text-sm text-slate-600">
          Choose Your Risk Tolerance Level
        </span>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant={'ghost'} size={'icon'} className="h-6 w-6">
              <HelpCircle className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="space-y-2">
              <h4 className="font-medium">Risk Tolerance</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Your risk tolerance affects how much you need to save for
                retirement:
              </p>
              <ul className="list-disc pl-4 text-sm text-slate-600 dark:text-slate-400">
                <li>
                  <strong>Normal (25x):</strong> This follows the traditional{' '}
                  <Link
                    href={'https://www.northwesternmutual.com/life-and-money/how-does-the-4-percent-rule-work-for-retirement/'}
                    className="underline"
                    target="_blank"
                  >
                    4% rule
                  </Link>
                  {' '}of safe withdrawal in retirement, assuming you need 25 times your annual expenses saved. Use this if you expect your retirement to last at most 30 years.
                </li>
                <li>
                  <strong>Conservative (30x):</strong> This approach provides an
                  extra cushion, which may be suitable for early retirees (e.g. needing more than 30 years of retirement income) or those in uncertain market conditions.
                </li>
              </ul>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Choose based on your comfort level with market fluctuations and
                your retirement timeline.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button
          variant={isConservative ? 'default' : 'outline'}
          className="h-14"
          onClick={() => setIsConservative(true)}
        >
          <div className="flex flex-col items-center">
            <span className="sm:text-lg">Conservative</span>
            <span className="text-xs">30x Expenses</span>
          </div>
        </Button>
        <Button
          variant={!isConservative ? 'default' : 'outline'}
          className="h-14"
          onClick={() => setIsConservative(false)}
        >
          <div className="flex flex-col items-center">
            <span className="sm:text-lg">Normal</span>
            <span className="text-xs">25x Expenses</span>
          </div>
        </Button>
      </div>
    </div>
  );
}
