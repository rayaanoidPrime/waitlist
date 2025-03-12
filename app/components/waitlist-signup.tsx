"use client"

import { useState, useEffect } from "react"
import { getWaitlistCount } from "../actions/waitlist"
import { XIcon } from "./icons/x-icon"
import { DiscordIcon } from "./icons/discord-icon"
import { LinkedInIcon } from "./icons/linkedin-icon"
import { Avatar } from "./avatar"
import { SocialIcon } from "./social-icon"
import { WaitlistForm } from "./waitlist-form"
import { FeatureList } from "./feature-list"
import { DocumentScan } from "./icons/document-scan"
import { motion } from "framer-motion"
import { Sparkles, Users, LineChart, Clock } from "lucide-react"

export function WaitlistSignup() {
  const [waitlistCount, setWaitlistCount] = useState(0)

  useEffect(() => {
    getWaitlistCount().then((count) => setWaitlistCount(count + 100))
  }, [])

  const handleSuccess = (count: number) => {
    setWaitlistCount(count + 100)
  }

  const statsItems = [
    { icon: <Clock className="w-4 h-4" />, text: "Save 20+ hours per week" },
    { icon: <Users className="w-4 h-4" />, text: "Process 1000+ resumes daily" },
    { icon: <LineChart className="w-4 h-4" />, text: "93% hiring accuracy" },
  ]

  return (
    <div className="w-full max-w-6xl mx-auto p-8 flex flex-col justify-between min-h-screen">
      <div className="flex-1 flex flex-col lg:flex-row justify-center items-center gap-12 py-12">
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 max-w-xl"
        >
          <div className="flex flex-col items-start gap-1 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <DocumentScan className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white font-semibold text-xl">HireLens AI</h3>
            </div>
            <span className="text-gray-400 text-xs ml-1 pl-12">A FutureLabs product</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Intelligent Resume Screening
            </span>
          </h1>

          <div className="relative mb-8">
            <p className="text-xl text-gray-300 leading-relaxed">
              Surface the best candidates from <span className="font-semibold text-white">thousands of resumes</span>{" "}
              with our intelligent AI agent. Get detailed insights for every hiring decision.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            {statsItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10"
              >
                <span className="text-blue-400">{item.icon}</span>
                <span className="text-sm text-gray-200">{item.text}</span>
              </div>
            ))}
          </div>

          <WaitlistForm onSuccess={handleSuccess} />

          <div className="flex items-center mt-6">
            <div className="flex -space-x-2 mr-4">
              <Avatar initials="JD" index={0} />
              <Avatar initials="AS" index={1} />
              <Avatar initials="MK" index={2} />
            </div>
            <p className="text-white font-medium">
              <span className="font-bold text-blue-400">{waitlistCount}+</span> HR professionals on the waitlist
            </p>
          </div>
        </motion.div>

        {/* Right Column - Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1 max-w-xl"
        >
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl"></div>

            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-white/10 shadow-xl">
              <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5 rounded-2xl"></div>

              <div className="flex justify-between items-center mb-6">
                <h3 className="text-white font-semibold flex items-center gap-2">
                  <DocumentScan className="w-5 h-5 text-blue-400" />
                  HireLens Analysis
                </h3>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>

              <FeatureList />

              <div className="mt-8 p-4 bg-black/30 rounded-xl border border-white/5">
                <h4 className="text-blue-400 font-medium mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> AI Agent Insight
                </h4>
                <p className="text-gray-300 text-sm">
                  "Based on analysis of 1,247 resumes, candidate Sarah Chen is the strongest match with 94% alignment to
                  required skills and 3+ years of relevant experience in machine learning deployment."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="pt-8 flex justify-center space-x-6"
      >
        <SocialIcon
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (formerly Twitter)"
          icon={<XIcon className="w-5 h-5" />}
        />
        <SocialIcon
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          icon={<LinkedInIcon className="w-5 h-5" />}
        />
        <SocialIcon
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
          icon={<DiscordIcon className="w-5 h-5" />}
        />
      </motion.div>
    </div>
  )
}

