// /expenses/analysis

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

import ExpenesStatistics from "~/components/expenses/ExpenseStatistics";
import Chart from "~/components/expenses/Chart";

export default function ExpensesAnalysis() {
  return (
    <main>
      <Chart expenses={DUMMY_EXPENSES} />
      <ExpenesStatistics expenses={DUMMY_EXPENSES} />
    </main>
  );
}
