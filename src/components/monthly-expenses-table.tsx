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

export default function MonthlyExpensesTable({ expenses, setExpenses, total }) {

  function handleUpdateCategory(value: string, id: string) {
    
    setExpenses()
  }

  function handleUpdateAmount() {}

  function handleRemoveExpense() {}

  function handleAddExpense() {}

  return (
    <section className="space-y-4">
      {/* Expenses Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Expense Category</TableHead>
            <TableHead className="text-right">Monthly Amount</TableHead>
            <TableHead className="w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expenses.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell className="font-medium">
                <Input
                  value={expense.category}
                  onChange={(e) => handleUpdateCategory(e.target.value, expense.id)}
                  className="h-9 text-sm"
                />
              </TableCell>
              <TableCell className="text-right">
                <Input
                  type="number"
                  min="0"
                  value={expense.amount}
                  onChange={handleUpdateAmount}
                  className="h-9 text-sm text-right"
                />
              </TableCell>
              <TableCell className="text-right">
                <Button
                  variant={'ghost'}
                  size="icon"
                  onClick={handleRemoveExpense}
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
        <Input />
        <Input />
        <Button size="icon" onClick={handleAddExpense}>
          <PlusCircle className="h-4 w-4" />
        </Button>
      </div>

      {/* Show Errors */}
      {}

      {/* Total Monthy Expenses */}
      <div>

      </div>
    </section>
  );
}
