import { redirect } from "next/navigation";
import { 
  CreditCard, 
  Check, 
  Star, 
  TrendingUp, 
  Zap,
  Calendar,
  ArrowUpRight
} from "lucide-react";

import { getCurrentUser } from "@/lib/session";
import { getUserSubscriptionPlan } from "@/lib/subscription";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { DashboardHeader } from "@/components/dashboard/header";
import { BillingInfo } from "@/components/pricing/billing-info";
import { Icons } from "@/components/shared/icons";

export const metadata = {
  title: "Billing & Subscription | Atlasly MedSpa Directory",
  description: "Manage your MedSpa listing subscription and billing information.",
};

const plans = [
  {
    name: "Basic",
    price: "$99",
    period: "/month",
    description: "Essential features for small MedSpas",
    features: [
      "Business listing page",
      "Up to 5 photos",
      "Contact information",
      "Basic analytics",
      "Patient reviews",
      "Service listings"
    ],
    stripePriceId: "price_basic_monthly",
    color: "gray"
  },
  {
    name: "Featured",
    price: "$299",
    period: "/month",
    description: "Stand out and attract more patients",
    features: [
      "Everything in Basic",
      "Featured badge",
      "Priority in search results",
      "20 photos + video",
      "Lead notifications",
      "Advanced analytics",
      "Special offers section",
      "Before/after gallery"
    ],
    stripePriceId: "price_featured_monthly",
    color: "purple",
    popular: true
  },
  {
    name: "Sponsored",
    price: "$599",
    period: "/month",
    description: "Maximum visibility and lead generation",
    features: [
      "Everything in Featured",
      "Top search placement",
      "Homepage featured section",
      "Unlimited photos/videos",
      "Priority lead routing",
      "Dedicated account manager",
      "Custom promotions",
      "API access",
      "Competitor-free zone"
    ],
    stripePriceId: "price_sponsored_monthly",
    color: "pink"
  }
];

export default async function MedSpaBillingPage() {
  const user = await getCurrentUser();

  let userSubscriptionPlan;
  if (user && user.id) {
    userSubscriptionPlan = await getUserSubscriptionPlan(user.id);
  } else {
    redirect("/login");
  }

  // Mock data for demo (widen to string to avoid literal comparison errors during build)
  const currentPlan: string = "Featured";
  const billingCycle = "monthly";
  const nextBillingDate = "December 15, 2024";
  const leadsThisMonth = 47;
  const viewsThisMonth = 1234;

  return (
    <>
      <DashboardHeader
        heading="Billing & Subscription"
        text="Manage your MedSpa listing plan and payment methods"
      />
      
      <div className="grid gap-8">
        {/* Current Plan Overview */}
        <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">Current Plan: {currentPlan}</CardTitle>
                <CardDescription>
                  Your next billing date is {nextBillingDate}
                </CardDescription>
              </div>
              <Badge className="bg-purple-600 text-white">Active</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <p className="text-sm text-gray-600">This Month's Performance</p>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-purple-600" />
                    <span className="font-semibold">{leadsThisMonth} Leads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ArrowUpRight className="h-4 w-4 text-purple-600" />
                    <span className="font-semibold">{viewsThisMonth} Views</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600">Billing Amount</p>
                <p className="mt-2 text-3xl font-bold text-purple-600">$299</p>
                <p className="text-sm text-gray-500">per month</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Lead Credit Usage</p>
                <Progress value={78} className="mt-2" />
                <p className="mt-1 text-xs text-gray-500">39 of 50 leads used</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="mr-2">
              <CreditCard className="mr-2 h-4 w-4" />
              Update Payment Method
            </Button>
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              View Billing History
            </Button>
          </CardFooter>
        </Card>

        {/* Upgrade Notice */}
        {currentPlan !== "Sponsored" && (
          <Alert className="border-purple-200 bg-purple-50">
            <Zap className="h-4 w-4 text-purple-600" />
            <AlertTitle>Boost Your Visibility</AlertTitle>
            <AlertDescription>
              Upgrade to Sponsored plan and get 3x more patient inquiries. 
              Limited time: Get your first month 20% off!
            </AlertDescription>
          </Alert>
        )}

        {/* Available Plans */}
        <div>
          <h2 className="mb-6 text-xl font-semibold">Available Plans</h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card 
                key={plan.name}
                className={plan.popular ? "border-purple-400 shadow-xl" : ""}
              >
                {plan.popular && (
                  <div className="flex justify-center">
                    <Badge className="absolute -top-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {plan.name}
                    {plan.name === currentPlan && (
                      <Badge variant="outline">Current</Badge>
                    )}
                  </CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-600">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="mr-2 h-5 w-5 flex-shrink-0 text-purple-600" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  {plan.name === currentPlan ? (
                    <Button className="w-full" disabled>
                      Current Plan
                    </Button>
                  ) : plan.name === "Basic" && currentPlan !== "Basic" ? (
                    <Button className="w-full" variant="outline">
                      Downgrade
                    </Button>
                  ) : (
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    >
                      Upgrade to {plan.name}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <Card>
          <CardHeader>
            <CardTitle>Payment Methods</CardTitle>
            <CardDescription>
              Manage your payment methods for automatic billing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center gap-4">
                  <CreditCard className="h-8 w-8 text-gray-400" />
                  <div>
                    <p className="font-medium">•••• •••• •••• 4242</p>
                    <p className="text-sm text-gray-500">Expires 12/2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-100 text-green-700">Default</Badge>
                  <Button size="sm" variant="outline">
                    Edit
                  </Button>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                + Add New Payment Method
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Billing History */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Your billing history for the past 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { date: "Nov 15, 2024", amount: "$299.00", status: "Paid", invoice: "#INV-2024-011" },
                { date: "Oct 15, 2024", amount: "$299.00", status: "Paid", invoice: "#INV-2024-010" },
                { date: "Sep 15, 2024", amount: "$299.00", status: "Paid", invoice: "#INV-2024-009" },
              ].map((transaction, idx) => (
                <div key={idx} className="flex items-center justify-between border-b pb-4 last:border-0">
                  <div>
                    <p className="font-medium">{transaction.date}</p>
                    <p className="text-sm text-gray-500">{transaction.invoice}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-medium">{transaction.amount}</span>
                    <Badge className="bg-green-100 text-green-700">{transaction.status}</Badge>
                    <Button size="sm" variant="ghost">
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Transactions
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}