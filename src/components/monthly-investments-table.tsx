'use client';
import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Trash2, PlusCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { v4 as uuidv4 } from 'uuid';
import { formatCurrency } from '@/lib/utils';

export type Investment = {
  id: string;
  account: string;
  amount: number;
};

interface MonthlyInvestmentsTableProps {
  monthlyInvestments: Investment[];
  setMonthlyInvestments: (investments: Investment[]) => void;
  totalMonthlyInvestments: number;
}

export default function MonthlyInvestmentsTable({
  monthlyInvestments,
  setMonthlyInvestments,
  totalMonthlyInvestments,
}: MonthlyInvestmentsTableProps) {
  const [error, setError] = useState('');
  const [newAccount, setNewAccount] = useState('');
  const [newAmount, setNewAmount] = useState('');

  function handleUpdateAccount(account: string, id: string) {
    setMonthlyInvestments(
      monthlyInvestments.map((investment) =>
        investment.id === id ? { ...investment, account } : investment
      )
    );
  }

  function handleUpdateAmount(amount: string, id: string) {
    const amountNum = Number.parseFloat(amount);
    if (isNaN(amountNum) || amountNum < 0) return;

    setMonthlyInvestments(
      monthlyInvestments.map((investment) =>
        investment.id === id ? { ...investment, amount: amountNum } : investment
      )
    );
  }

  function handleRemoveInvestment(id: string) {
    setMonthlyInvestments(monthlyInvestments.filter((investment) => investment.id !== id));
  }

  function handleAddInvestment() {
    if (!newAccount.trim()) {
      setError('Please enter an investment account');
      return;
    }

    const amountNum = Number.parseFloat(newAmount);
    if (isNaN(amountNum) || amountNum < 0) {
      setError('Please enter a valid amount');
      return;
    }

    setMonthlyInvestments([
      ...monthlyInvestments,
      { id: uuidv4(), account: newAccount.trim(), amount: amountNum },
    ]);

    // Reset Form
    setNewAccount('');
    setNewAmount('');
    setError('');
  }

  return (
    <section className="space-y-2">
      {/* Investments Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Account Name</TableHead>
            <TableHead className="text-right">Monthly Amount ($)</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {monthlyInvestments.map((investment) => (
            <TableRow key={investment.id}>
              <TableCell className="font-medium">
                <Input
                  value={investment.account}
                  onChange={(e) =>
                    handleUpdateAccount(e.target.value, investment.id)
                  }
                  className="h-9 text-sm"
                />
              </TableCell>
              <TableCell className="text-right">
                <Input
                  type="number"
                  min="0"
                  value={investment.amount}
                  onChange={(e) =>
                    handleUpdateAmount(e.target.value, investment.id)
                  }
                  className="h-9 text-sm text-right"
                />
              </TableCell>
              <TableCell className="text-right">
                <Button
                  variant={'ghost'}
                  size="icon"
                  onClick={() => handleRemoveInvestment(investment.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Input New Account  Section */}
      <div className="flex items-center gap-2">
        <Input
          placeholder="Account name"
          value={newAccount}
          onChange={(e) => {
            setNewAccount(e.target.value);
          }}
          className="flex-1 text-sm"
        />
        <Input
          type="number"
          min="0"
          placeholder="Amount"
          value={newAmount}
          onChange={(e) => {
            setNewAmount(e.target.value);
          }}
          className="w-34 text-sm"
        />
        <Button size="icon" onClick={handleAddInvestment}>
          <PlusCircle className="h-4 w-4" />
        </Button>
      </div>

      {/* Show Errors */}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* Total Monthy Investments */}
      <div className="bg-accent/30 space-y-2 p-3 mt-4 rounded-md ">
        <div className="flex justify-between">
          <span className="font-medium">Total Monthly Investments:</span>
          <span className="font-bold">
            {formatCurrency(totalMonthlyInvestments)}
          </span>
        </div>
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Estimated Annual Investments:</span>
          <span>{formatCurrency(totalMonthlyInvestments * 12)}</span>
        </div>
      </div>
    </section>
  );
}
