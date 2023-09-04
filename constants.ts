import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Mic2,
  Music,
  Settings,
  VideoIcon,
  ScanFace,
  Webhook,
  Fingerprint
} from "lucide-react"

export const MAX_FREE_COUNTS = 5

export const tools = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    bgColor: "bg-violet-500/10",

    color: "text-green-700",
  },
  {
    label: "Face Anti Spoof API",
    icon: ScanFace,
    href: "/spoof-api",
    bgColor: "bg-violet-500/10",

    color: "text-green-700",
  },
  {
    label: "AI Music Splitter",
    icon: Music,
    bgColor: "bg-violet-500/10",

    color: "text-green-700",

    href: "/music-splitter",
  },

  {
    label: "AI Music Cloner",
    icon: Mic2,
    bgColor: "bg-violet-500/10",

    color: "text-green-700",

    href: "/music-cloner",
  },
  {
    label: "DeepFake Detection",
    icon: Fingerprint,
    bgColor: "bg-violet-500/10",

    color: "text-orange-700",
    href: "/deepfake",
  },
//   {
//     label: "Code Generation",
//     icon: Code,
//     bgColor: "bg-violet-500/10",

//     color: "text-green-700",
//     href: "/code",
//   },
]
