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
import { Investment } from './monthly-investments-table';

interface InvestmentHoldingsTableProps {
  currentInvestments: Investment[];
  setCurrentInvestments: (investments: Investment[]) => void;
  totalCurrentInvestments: number;
}

export default function InvestmentHoldingsTable({
  currentInvestments,
  setCurrentInvestments,
  totalCurrentInvestments,
}: InvestmentHoldingsTableProps) {
  const [newAccount, setNewAccount] = useState('');
  const [newAmount, setNewAmount] = useState('');
  const [error, setError] = useState('');

  function handleUpdateAccount(account: string, id: string) {
    setCurrentInvestments(
      currentInvestments.map((investment) =>
        investment.id === id ? { ...investment, account } : investment
      )
    );
  }

  function handleUpdateAmount(amount: string, id: string) {
    const amountNum = Number.parseFloat(amount);
    if (isNaN(amountNum) || amountNum < 0) {
      setError('Please enter a valid amount');
      return;
    }
    setCurrentInvestments(
      currentInvestments.map((investment) =>
        investment.id === id ? { ...investment, amount: amountNum } : investment
      )
    );
  }

  function handleRemoveInvestment(id: string) {
    setCurrentInvestments(
      currentInvestments.filter((investment) => investment.id !== id)
    );
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

    setCurrentInvestments([
      ...currentInvestments,
      { id: uuidv4(), account: newAccount, amount: amountNum },
    ]);

    // Reset Form
    setNewAccount('');
    setNewAmount('');
    setError('');
  }

  return (
    <section className="space-y-2">
      {/* Investment Holding Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Account Name</TableHead>
            <TableHead className="text-right">Amount ($)</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentInvestments.map((investment) => (
            <TableRow key={investment.id}>
              <TableCell className="font-medium">
                <Input
                  value={investment.account}
                  onChange={(e) =>
                    handleUpdateAccount(e.target.value, investment.id)
                  }
                  className="text-sm h-9"
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
                  variant="ghost"
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

      {/* Add Investment */}
      <div>
        <div className="flex justify-between gap-2">
          <Input
            placeholder="Account name"
            value={newAccount}
            onChange={(e) => setNewAccount(e.target.value)}
            className="flex-1 text-sm"
          />
          <Input
            type="number"
            min="0"
            placeholder="Amount"
            value={newAmount}
            onChange={(e) => setNewAmount(e.target.value)}
            className="text-sm w-34"
          />
          <Button size="icon" onClick={handleAddInvestment} className="">
            <PlusCircle className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Show errors */}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* Total Investments */}
      <div className="mt-4 flex justify-between bg-accent p-3 rounded-md">
        <span className="font-medium">Total Current Investments:</span>
        <span className="font-bold">
          {formatCurrency(totalCurrentInvestments)}
        </span>
      </div>
    </section>
  );
}
