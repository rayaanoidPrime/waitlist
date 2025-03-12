"use client"

import type React from "react"
import { motion } from "framer-motion"

interface SocialIconProps {
  href: string
  "aria-label": string
  icon: React.ReactNode
  target?: string
  rel?: string
}

export function SocialIcon({ href, "aria-label": ariaLabel, icon, target, rel }: SocialIconProps) {
  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      target={target}
      rel={rel}
      className="text-gray-400 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110 bg-white/5 p-3 rounded-full"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
    </motion.a>
  )
}

