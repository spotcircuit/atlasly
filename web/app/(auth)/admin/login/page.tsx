import { Suspense } from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Shield } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/components/forms/user-auth-form";
import { Icons } from "@/components/shared/icons";

export const metadata: Metadata = {
  title: "Admin Login | Atlasly",
  description: "Administrator access to Atlasly platform",
};

export default function AdminLoginPage() {
  return (
    <div className="container relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-900 to-pink-900">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "outline", size: "sm" }),
          "absolute left-4 top-4 border-white/20 bg-white/10 text-white hover:bg-white/20 md:left-8 md:top-8",
        )}
      >
        <>
          <Icons.chevronLeft className="mr-2 size-4" />
          Back to Home
        </>
      </Link>
      
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
        <div className="rounded-lg border border-white/20 bg-white/10 p-8 shadow-xl backdrop-blur-lg">
          <div className="flex flex-col space-y-4 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
              <Shield className="size-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white">
              Admin Access
            </h1>
            <p className="text-sm text-white/80">
              Restricted area for platform administrators only
            </p>
          </div>
          
          <div className="mt-6">
            <Suspense>
              <UserAuthForm />
            </Suspense>
          </div>
          
          <div className="mt-6 rounded-lg bg-red-500/20 p-3">
            <p className="text-xs text-white/90">
              <strong>Security Notice:</strong> All admin activities are logged and monitored. 
              Unauthorized access attempts will be reported.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/login"
            className="text-sm text-white/60 hover:text-white/80"
          >
            Not an admin? Go to customer login →
          </Link>
        </div>
      </div>
    </div>
  );
}