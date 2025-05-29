import { cn } from "@/lib/utils"
import type { HTMLAttributes } from "react"

interface BubbleCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

export function BubbleCard({ className, hover = true, children, ...props }: BubbleCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-3xl p-8 bubble-shadow",
        hover && "transition-all duration-300 hover:bubble-shadow-xl hover:-translate-y-1",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
