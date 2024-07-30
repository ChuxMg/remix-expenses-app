import type { MetaFunction } from "@remix-run/node";

import AuthForm from "~/components/AuthForm";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix Expenses App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function AuthPage() {
  return <AuthForm />;
}
