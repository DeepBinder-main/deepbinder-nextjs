
import { ReactNode } from "react";
import AuthCheck from "@/components/AuthCheck";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <AuthCheck>
      <div className="h-full relative">
        <div
          className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 
        z-[80] bg-gray-900
        "
        >
          <Sidebar apiLimitCount={0} isPro={false} />
        </div>
        <main className="md:pl-72">
          <Navbar />
          {children}
        </main>
      </div>
    </AuthCheck>
  );
}