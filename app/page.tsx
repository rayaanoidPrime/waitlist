"use client"

import { WaitlistSignup } from "./components/waitlist-signup"
import { Toaster } from "@/components/ui/toaster"

const backgroundStyle = `
  .bg-grid-pattern {
    background-size: 30px 30px;
    background-image: 
      linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  }

  .content {
    position: relative;
    z-index: 2;
  }

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .animated-gradient {
    background: linear-gradient(-45deg, #0f172a, #1e3a8a, #1e40af, #0f172a);
    background-size: 400% 400%;
    animation: gradientAnimation 15s ease infinite;
  }

  .noise-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    opacity: 0.03;
    pointer-events: none;
    z-index: 1;
  }
`

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center animated-gradient overflow-hidden">
      <style jsx global>
        {backgroundStyle}
      </style>
      <div className="noise-overlay"></div>
      <div className="content w-full">
        <WaitlistSignup />
      </div>
      <Toaster
        toastOptions={{
          style: {
            background: "rgb(15 23 42)",
            color: "white",
            border: "1px solid rgb(51 65 85)",
          },
          className: "rounded-xl",
          duration: 5000,
        }}
      />
    </main>
  )
}

