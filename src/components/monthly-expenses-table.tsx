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

export type Expense = {
  id: string;
  category: string;
  amount: number;
};

interface MonthlyExpensesTableProps {
  monthlyExpenses: Expense[];
  setMonthlyExpenses: (expenses: Expense[]) => void;
  totalMonthlyExpenses: number;
}

export default function MonthlyExpensesTable({
  monthlyExpenses,
  setMonthlyExpenses,
  totalMonthlyExpenses,
}: MonthlyExpensesTableProps) {
  const [error, setError] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [newAmount, setNewAmount] = useState('');

  function handleUpdateCategory(category: string, id: string) {
    setMonthlyExpenses(
      monthlyExpenses.map((expense) =>
        expense.id === id ? { ...expense, category } : expense
      )
    );
  }

  function handleUpdateAmount(amount: string, id: string) {
    const amountNum = Number.parseFloat(amount);
    if (isNaN(amountNum) || amountNum < 0) return;

    setMonthlyExpenses(
      monthlyExpenses.map((expense) =>
        expense.id === id ? { ...expense, amount: amountNum } : expense
      )
    );
  }

  function handleRemoveExpense(id: string) {
    setMonthlyExpenses(monthlyExpenses.filter((expense) => expense.id !== id));
  }

  function handleAddExpense() {
    if (!newCategory.trim()) {
      setError('Please enter an expense category');
      return;
    }

    const amountNum = Number.parseFloat(newAmount);
    if (isNaN(amountNum) || amountNum < 0) {
      setError('Please enter a valid amount');
      return;
    }

    setMonthlyExpenses([
      ...monthlyExpenses,
      { id: uuidv4(), category: newCategory.trim(), amount: amountNum },
    ]);

    // Reset Form
    setNewCategory('');
    setNewAmount('');
    setError('');
  }

  return (
    <section className="space-y-4">
      {/* Expenses Table */}
      <Table className='flex flex-col'>
        <TableHeader>
          <TableRow>
            <TableHead className="">Expense Category</TableHead>
            <TableHead className="text-right">Monthly Amount ($)</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {monthlyExpenses.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell className="font-medium">
                <Input
                  value={expense.category}
                  onChange={(e) =>
                    handleUpdateCategory(e.target.value, expense.id)
                  }
                  className="h-9 text-sm"
                />
              </TableCell>
              <TableCell className="text-right">
                <Input
                  type="number"
                  min="0"
                  value={expense.amount}
                  onChange={(e) =>
                    handleUpdateAmount(e.target.value, expense.id)
                  }
                  className="h-9 text-sm text-right"
                />
              </TableCell>
              <TableCell className="text-right">
                <Button
                  variant={'ghost'}
                  size="icon"
                  onClick={() => handleRemoveExpense(expense.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Input New Category  Section */}
      <div className="flex items-center gap-2">
        <Input
          placeholder="Expense category"
          value={newCategory}
          onChange={(e) => {
            setNewCategory(e.target.value);
          }}
          className="flex-1 text-sm"
        />
        <Input
          type="number"
          min="0"
          placeholder="Monthly amount"
          value={newAmount}
          onChange={(e) => {
            setNewAmount(e.target.value);
          }}
          className="w-34 text-sm"
        />
        <Button size="icon" onClick={handleAddExpense}>
          <PlusCircle className="h-4 w-4" />
        </Button>
      </div>

      {/* Show Errors */}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* Total Monthy Expenses */}
      <div className="bg-accent space-y-2 p-3 mt-4 rounded-md">
        <div className="flex justify-between">
          <span className="font-medium">Total Monthly Expenses:</span>
          <span className="font-bold">
            {formatCurrency(totalMonthlyExpenses)}
          </span>
        </div>
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Estimated Annual Expenses:</span>
          <span>{formatCurrency(totalMonthlyExpenses * 12)}</span>
        </div>
      </div>
    </section>
  );
}
