"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Brain, Search, ShieldCheck, BarChart4, Zap, FileText } from "lucide-react"

interface FeatureProps {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

function Feature({ icon, title, description, delay }: FeatureProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="flex items-start space-x-3 mb-5"
    >
      <div className="mt-0.5 bg-blue-500/20 p-2 rounded-lg text-blue-400 flex-shrink-0">{icon}</div>
      <div>
        <h3 className="font-medium text-white">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </motion.div>
  )
}

export function FeatureList() {
  const features = [
    {
      icon: <Brain className="h-4 w-4" />,
      title: "Agentic AI Analysis",
      description: "Our AI agent autonomously evaluates resumes against job requirements with human-like reasoning.",
      delay: 0.1,
    },
    {
      icon: <Search className="h-4 w-4" />,
      title: "Bulk Processing",
      description: "Effortlessly screen 1000+ resumes in minutes, not days.",
      delay: 0.2,
    },
    {
      icon: <ShieldCheck className="h-4 w-4" />,
      title: "Bias Detection",
      description: "Advanced algorithms identify and reduce unconscious bias in your hiring process.",
      delay: 0.3,
    },
    {
      icon: <BarChart4 className="h-4 w-4" />,
      title: "Decision Insights",
      description: "Get detailed reasoning behind every candidate recommendation.",
      delay: 0.4,
    },
    {
      icon: <Zap className="h-4 w-4" />,
      title: "Automated Matching",
      description: "Instantly match candidates to multiple open positions based on skills and experience.",
      delay: 0.5,
    },
    {
      icon: <FileText className="h-4 w-4" />,
      title: "Custom Workflows",
      description: "Tailor the screening process to your organization's unique hiring needs.",
      delay: 0.6,
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-2">
      {features.map((feature, index) => (
        <Feature
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          delay={feature.delay}
        />
      ))}
    </div>
  )
}

