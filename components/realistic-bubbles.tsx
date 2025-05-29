"use client"

import { useEffect, useRef } from "react"

interface Bubble {
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  wobbleOffset: number
  wobbleSpeed: number
  popTime: number | null
  popStage: number
  shade: number
  color?: "blue" | "mint" // Add this line
}

interface RealisticBubblesProps {
  color?: "blue" | "mint"
}

export function RealisticBubbles({ color = "blue" }: RealisticBubblesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full width/height
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.offsetWidth
        canvas.height = parent.offsetHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create bubbles
    const bubbleCount = Math.floor(canvas.width / 40) // Adjust bubble density
    const bubbles: Bubble[] = []

    for (let i = 0; i < bubbleCount; i++) {
      const size = Math.random() * 60 + 20 // Bubble size between 20-80px
      bubbles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 300, // Start below the canvas
        size: size,
        speed: Math.random() * 0.8 + 0.3, // Bubble speed
        opacity: Math.random() * 0.4 + 0.2, // Bubble opacity
        wobbleOffset: Math.random() * Math.PI * 2, // Random starting point for wobble
        wobbleSpeed: Math.random() * 0.02 + 0.005, // How fast the bubble wobbles
        popTime: Math.random() < 0.3 ? Math.random() * 15000 + 5000 : null, // Some bubbles will pop
        popStage: 0,
        shade: Math.floor(Math.random() * 3), // Different shades
        color: color, // Use the color prop
      })
    }

    let lastTime = 0
    // Animation loop
    const animate = (timestamp: number) => {
      const deltaTime = timestamp - lastTime
      lastTime = timestamp

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update bubbles
      bubbles.forEach((bubble, index) => {
        // Skip if bubble is fully popped
        if (bubble.popStage >= 1) {
          // Reset bubble
          if (Math.random() < 0.01) {
            bubble.y = canvas.height + bubble.size
            bubble.x = Math.random() * canvas.width
            bubble.popStage = 0
            bubble.popTime = Math.random() < 0.3 ? Math.random() * 15000 + 5000 : null
          }
          return
        }

        // Check if it's time to pop
        if (bubble.popTime !== null) {
          bubble.popTime -= deltaTime
          if (bubble.popTime <= 0) {
            bubble.popStage += 0.02
          }
        }

        // Wobble effect - make x position oscillate slightly
        const wobble = Math.sin(timestamp * bubble.wobbleSpeed + bubble.wobbleOffset) * 2

        // Draw cartoon bubble
        const currentSize = bubble.size - bubble.popStage * bubble.size
        if (currentSize > 0) {
          ctx.beginPath()
          ctx.arc(bubble.x + wobble, bubble.y, currentSize, 0, Math.PI * 2)

          // Different blue shades for variety
          let bubbleColor
          if (bubble.color === "mint") {
            switch (bubble.shade) {
              case 0:
                bubbleColor = `rgba(0, 230, 190, ${bubble.opacity})`
                break
              case 1:
                bubbleColor = `rgba(0, 210, 170, ${bubble.opacity})`
                break
              default:
                bubbleColor = `rgba(0, 250, 210, ${bubble.opacity})`
            }
          } else {
            switch (bubble.shade) {
              case 0:
                bubbleColor = `rgba(36, 145, 255, ${bubble.opacity})`
                break
              case 1:
                bubbleColor = `rgba(0, 119, 255, ${bubble.opacity})`
                break
              default:
                bubbleColor = `rgba(65, 176, 255, ${bubble.opacity})`
            }
          }

          // Fill with color
          ctx.fillStyle = bubbleColor

          // Add cartoon-style stroke
          ctx.strokeStyle = `rgba(255, 255, 255, ${bubble.opacity * 0.8})`
          ctx.lineWidth = 2
          ctx.stroke()

          // Add cartoon highlight (small white circle)
          const highlightSize = currentSize * 0.2
          const highlightX = bubble.x + wobble - currentSize * 0.3
          const highlightY = bubble.y - currentSize * 0.3

          ctx.beginPath()
          ctx.arc(highlightX, highlightY, highlightSize, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${bubble.opacity * 0.9})`
          ctx.fill()

          // Add smaller second highlight
          const smallHighlightSize = currentSize * 0.1
          const smallHighlightX = bubble.x + wobble + currentSize * 0.2
          const smallHighlightY = bubble.y - currentSize * 0.1

          ctx.beginPath()
          ctx.arc(smallHighlightX, smallHighlightY, smallHighlightSize, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${bubble.opacity * 0.7})`
          ctx.fill()
        }

        // Move bubble upward with slight horizontal drift
        bubble.y -= bubble.speed
        bubble.x += Math.sin(timestamp * 0.001 + bubble.y * 0.01) * 0.5

        // Reset bubble position if it goes off screen
        if (bubble.y < -bubble.size * 2) {
          bubble.y = canvas.height + bubble.size
          bubble.x = Math.random() * canvas.width
          bubble.popStage = 0
          bubble.popTime = Math.random() < 0.3 ? Math.random() * 15000 + 5000 : null
        }
      })

      requestAnimationFrame(animate)
    }

    animate(0)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [color])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }} />
}
