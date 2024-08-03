import { Outlet } from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "First Expense",
    amount: 12.99,
    date: new Date().toISOString(),
  },
  {
    id: "e2",
    title: "Second Expense",
    amount: 25.99,
    date: new Date().toISOString(),
  },
  {
    id: "e3",
    title: "Third Expense",
    amount: 10.99,
    date: new Date().toISOString(),
  },
];

function ExpensesLayout() {
  return (
    <>
      <Outlet />
    <main>
      <ExpensesList expenses={DUMMY_EXPENSES} />
      
    </main>
    </>
  );
}

export default ExpensesLayout;
