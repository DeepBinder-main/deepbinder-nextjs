"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from 'next/font/google'
import {Fingerprint , Mic2 ,ScanFace ,Webhook , Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
// import { FreeCounter } from "@/components/free-counter";

const poppins = Montserrat ({ weight: '600', subsets: ['latin-ext'] });

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: "text-sky-500"
  },
  {
    label: 'Face Anti Spoof API',
    icon: ScanFace,
    href: '/spoof-api',
    color: "text-violet-500",
  },
  {
    label: 'AI Music Splitter',
    icon: Music,
    color: "text-emerald-500",
    href: '/music-splitter',
  },
  
  {
    label: 'AI Music Cloner',
    icon: Mic2,
    color: "text-pink-700",
    href: '/music-cloner',
  },
  {
    label: 'DeepFake Detection',
    icon: Fingerprint,
    color: "text-orange-700",
    href: '/deepfake',
  },
  // {
  //   label: 'Code Generation',
  //   icon: Code,
  //   color: "text-green-700",
  //   href: '/code',
  // },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
  },
];

export const Sidebar = ({
  apiLimitCount = 0,
  isPro = false
}: {
  apiLimitCount: number;
  isPro: boolean;
}) => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative h-12 w-12 mr-4">
            <Image fill alt="Logo" src="https://raw.githubusercontent.com/sanjay7178/sanjay7178.github.io/main/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold", poppins.className)}>
            Deepbinder.ai
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            // {}
            <Link 
            
              key={route.href} 
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400",
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* <FreeCounter 
        apiLimitCount={apiLimitCount} 
        isPro={isPro}
      /> */}
    </div>
  );
};