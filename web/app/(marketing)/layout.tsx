import { NavBar } from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { NavMobile } from "@/components/layout/mobile-nav";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <NavMobile />
      <NavBar scroll={true} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
