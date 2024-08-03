import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

function ExpenseForm() {
  const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10

  return (
    <form method="post" className="mx-auto max-w-sm space-y-12">
      <div className="space-y-8">
        <div className="space-y-2">
          <Label htmlFor="title">Expense Title</Label>
          <Input
            id="title"
            type="text"
            name="title"
            placeholder=""
            required
            maxLength={30}
          />
        </div>

        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              type="number"
              name="amount"
              min="0"
              step="0.01"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input id="date" type="date" name="date" max={today} required />
          </div>
        </div>

        <div className="flex justify-between space-x-3">
          <Button type="submit" variant="outline" className="w-full">
            Cancel
          </Button>
          <Button type="submit" className="w-full">
            Save Expense
          </Button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
