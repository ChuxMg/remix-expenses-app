/**
 * v0 by Vercel.
 * @see https://v0.dev/t/oCpJ7xKYo1v
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";

interface Expense {
  id: string;
  title: string;
  amount: number;
}


export default function ExpenseListItem({ title, amount }: Expense) {
  return (
    <Card className="min-w-screen-sm">
      <CardContent className="flex items-center justify-between">
        <div className="space-y-1">
          <div className="font-medium">{title}</div>
          <div className="text-sm text-muted-foreground">
            ${amount.toFixed(2)}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <PencilIcon className="h-5 w-5" />
            <span className="sr-only">Edit</span>
          </Button>
          <Button variant="ghost" size="icon">
            <TrashIcon className="h-5 w-5" />
            <span className="sr-only">Delete</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function PencilIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  );
}

function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
