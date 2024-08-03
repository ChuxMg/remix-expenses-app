import ExpenseListItem from '../ExpenseListItem';

interface Expense {
  id: string;
  title: string;
  amount: number;
}

interface ExpensesListProps {
  expenses: Expense[];
}

function ExpensesList({ expenses }: ExpensesListProps) {

  return (
    <ol className="flex space-x-4 justify-center mt-14">
      {expenses.map((expense) => (
        <li key={expense.id}>
          <ExpenseListItem
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
          />
        </li>
      ))}
    </ol>
  );
}

export default ExpensesList;
