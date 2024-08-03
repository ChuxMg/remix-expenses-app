import { Outlet } from "@remix-run/react";

function ExpensesLayout() {
  return (
    <main>
      <p>Shared element!</p>
      <Outlet />
    </main>
  );
}

export default ExpensesLayout;
