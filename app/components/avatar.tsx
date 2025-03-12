interface AvatarProps {
  initials: string
  index: number
}

export function Avatar({ initials, index }: AvatarProps) {
  const colors = [
    "bg-gradient-to-br from-purple-600 to-blue-700", // First avatar
    "bg-gradient-to-br from-blue-600 to-blue-800", // Second avatar
    "bg-gradient-to-br from-blue-500 to-blue-700", // Third avatar
  ]

  return (
    <div
      className={`w-10 h-10 rounded-full border border-white/20 ${colors[index]} flex items-center justify-center text-white font-semibold text-sm shadow-lg`}
    >
      {initials}
    </div>
  )
}

