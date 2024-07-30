/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cqmvaycsMfE
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { FaLock } from "react-icons/fa";

export default function Component() {
  return (
    <div className="mx-auto max-w-sm space-y-6">
      <div className="flex items-center justify-center text-4xl">
        <FaLock />
      </div>

      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Welcome Back</h1>
        <p className="text-muted-foreground">
          Enter your email and password to sign in to your account.
        </p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Sign In
        </Button>
        <p className="flex justify-center">Don&apos;t have an account yet? Sign-up.</p>
      </div>
    </div>
  );
}
