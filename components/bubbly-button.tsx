"use client"

import { cn } from "@/lib/utils"
import { type ButtonHTMLAttributes, forwardRef, cloneElement, isValidElement } from "react"
import { Slot } from "@radix-ui/react-slot"

interface BubblyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg" | "xl"
  asChild?: boolean
}

export const BubblyButton = forwardRef<HTMLButtonElement, BubblyButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, children, ...props }, ref) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-bold transition-all duration-300 transform hover:scale-105 active:scale-95"

    const variants = {
      primary: "bg-blue-500 text-white hover:bg-blue-600 bubble-shadow hover:bubble-shadow-lg",
      secondary: "bg-white text-blue-500 hover:bg-blue-50 bubble-shadow hover:bubble-shadow-lg",
      outline: "bg-transparent text-blue-500 border-3 border-blue-500 hover:bg-blue-50",
    }

    const sizes = {
      sm: "px-6 py-3 text-sm rounded-full",
      md: "px-8 py-4 text-base rounded-full",
      lg: "px-10 py-5 text-lg rounded-full",
      xl: "px-12 py-6 text-xl rounded-full",
    }

    const allClassNames = cn(baseStyles, variants[variant], sizes[size], className)

    if (asChild && isValidElement(children)) {
      const childElement = children as React.ReactElement<any>
      return cloneElement(childElement, {
        className: cn(childElement.props.className, allClassNames),
        ...props,
      })
    }

    const Comp = asChild ? Slot : "button"

    return (
      <Comp ref={ref} className={allClassNames} {...props}>
        {asChild ? (
          children
        ) : (
          <>
            <span className="relative z-10">{children}</span>
            {variant === "primary" && (
              <div className="absolute inset-0 rounded-full bg-white opacity-0 hover:opacity-20 transition-opacity duration-300" />
            )}
          </>
        )}
      </Comp>
    )
  },
)

BubblyButton.displayName = "BubblyButton"
