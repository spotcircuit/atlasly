import { Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/components/forms/user-auth-form";
import { Icons } from "@/components/shared/icons";

export const metadata: Metadata = {
  title: "Login | Atlasly MedSpa Directory",
  description: "Sign in to manage your MedSpa listing or browse saved favorites",
};

export default function LoginPage() {
  return (
    <div className="container relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "outline", size: "sm" }),
          "absolute left-4 top-4 md:left-8 md:top-8",
        )}
      >
        <>
          <Icons.chevronLeft className="mr-2 size-4" />
          Back to Home
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
        <div className="rounded-lg border bg-white p-8 shadow-lg">
          <div className="flex flex-col space-y-2 text-center">
            <Icons.logo className="mx-auto size-8 text-purple-600" />
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">
              Welcome Back to Atlasly
            </h1>
            <p className="text-sm text-gray-600">
              Sign in to manage your MedSpa or browse as a customer
            </p>
          </div>
          <Suspense>
            <UserAuthForm />
          </Suspense>
          <div className="mt-6 space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or</span>
              </div>
            </div>
            <div className="grid gap-2">
              <Link
                href="/admin/login"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "w-full border-purple-200 hover:bg-purple-50 hover:text-purple-700"
                )}
              >
                <Icons.lock className="mr-2 size-4" />
                Admin Login
              </Link>
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-purple-600 hover:text-purple-700"
          >
            Sign up for free
          </Link>
        </p>
      </div>
    </div>
  );
}
