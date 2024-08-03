/**
 * v0 by Vercel.
 * @see https://v0.dev/t/naYcZQ7zlRf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { NavLink } from "@remix-run/react";

export default function MainNav() {
  return (
    <header className="w-full bg-background py-4 shadow">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <NavLink to="/" className="text-lg font-bold">
          RemixExpenseApp
        </NavLink>
        <nav className="flex items-center gap-4 md:gap-6">
          <NavLink
            to="/"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-700 hover:text-white aria-[current=page]:bg-gray-700  aria-[current=page]:text-gray-300"
            aria-current
          >
            Home
          </NavLink>
          <NavLink
            to="/pricing"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-700 hover:text-white aria-[current=page]:bg-gray-700 aria-[current=page]:text-gray-300"
          >
            Pricing
          </NavLink>
          <NavLink
            to="/expenses"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-700 hover:text-white aria-[current=page]:bg-gray-700  aria-[current=page]:text-gray-300"
          >
            Expense
          </NavLink>
          <NavLink
            to="/auth"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Login
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
