// expenses => shared layout


import { Outlet } from "@remix-run/react";

export default function ExpensesLayout() {
  return (
    <main>
      <p>Shared elements!</p>
      <Outlet />
    </main>
  );
}
