import React, { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  pulse: number
  pulseSpeed: number
}

interface Pulse {
  sourceIndex: number
  targetIndex: number
  progress: number
  speed: number
}

export const EngineeringBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    // Optional mouse interaction
    let mouseX = -1000
    let mouseY = -1000
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    // Adaptive node count based on screen width
    const isMobile = width < 768
    const nodeCount = isMobile ? 26 : 55
    const maxDistance = isMobile ? 125 : 185

    const nodes: Node[] = []
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.45,
        vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.6 + 1.2,
        pulse: Math.random() * Math.PI,
        pulseSpeed: 0.02 + Math.random() * 0.02,
      })
    }

    // Light pulses traveling along synaptic connections
    const pulses: Pulse[] = []
    const spawnPulse = () => {
      if (nodes.length < 2 || prefersReducedMotion) return
      const src = Math.floor(Math.random() * nodes.length)
      // Find nearest neighbor
      let bestDist = Infinity
      let target = -1
      for (let j = 0; j < nodes.length; j++) {
        if (src === j) continue
        const dx = nodes[src].x - nodes[j].x
        const dy = nodes[src].y - nodes[j].y
        const d = Math.hypot(dx, dy)
        if (d < maxDistance && d < bestDist) {
          bestDist = d
          target = j
        }
      }
      if (target !== -1 && pulses.length < (isMobile ? 5 : 10)) {
        pulses.push({
          sourceIndex: src,
          targetIndex: target,
          progress: 0,
          speed: 0.012 + Math.random() * 0.016,
        })
      }
    }

    let pulseTimer = 0

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Draw faint circuit/engineering grid lines in the background
      ctx.lineWidth = 0.5
      ctx.strokeStyle = 'rgba(103, 245, 154, 0.025)'
      const gridSize = isMobile ? 80 : 120
      ctx.beginPath()
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
      }
      ctx.stroke()

      // Update and draw node connections
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i]

        if (!prefersReducedMotion) {
          n1.x += n1.vx
          n1.y += n1.vy
          n1.pulse += n1.pulseSpeed

          // Wrap around edges gracefully
          if (n1.x < 0) n1.x = width
          if (n1.x > width) n1.x = 0
          if (n1.y < 0) n1.y = height
          if (n1.y > height) n1.y = 0

          // Subtle reaction to mouse position
          const mdx = n1.x - mouseX
          const mdy = n1.y - mouseY
          const mdist = Math.hypot(mdx, mdy)
          if (mdist < 100 && mdist > 0) {
            const push = (100 - mdist) * 0.002
            n1.x += (mdx / mdist) * push
            n1.y += (mdy / mdist) * push
          }
        }

        // Draw connections between nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j]
          const dx = n1.x - n2.x
          const dy = n1.y - n2.y
          const dist = Math.hypot(dx, dy)

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.22
            ctx.beginPath()
            ctx.moveTo(n1.x, n1.y)
            ctx.lineTo(n2.x, n2.y)
            ctx.strokeStyle = `rgba(103, 245, 154, ${alpha})`
            ctx.lineWidth = 0.75
            ctx.stroke()
          }
        }
      }

      // Update and draw pulses (traveling info signals)
      if (!prefersReducedMotion) {
        pulseTimer++
        if (pulseTimer % 40 === 0) {
          spawnPulse()
        }

        for (let p = pulses.length - 1; p >= 0; p--) {
          const pulse = pulses[p]
          pulse.progress += pulse.speed
          if (pulse.progress >= 1) {
            pulses.splice(p, 1)
            continue
          }

          const sNode = nodes[pulse.sourceIndex]
          const tNode = nodes[pulse.targetIndex]
          if (!sNode || !tNode) {
            pulses.splice(p, 1)
            continue
          }

          const px = sNode.x + (tNode.x - sNode.x) * pulse.progress
          const py = sNode.y + (tNode.y - sNode.y) * pulse.progress

          ctx.beginPath()
          ctx.arc(px, py, 2, 0, Math.PI * 2)
          ctx.fillStyle = 'rgba(160, 255, 192, 0.9)'
          ctx.shadowColor = 'rgba(103, 245, 154, 0.9)'
          ctx.shadowBlur = 8
          ctx.fill()
          ctx.shadowBlur = 0
        }
      }

      // Draw nodes with subtle breathing emerald glow
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        const currentRadius = n.radius + (prefersReducedMotion ? 0 : Math.sin(n.pulse) * 0.45)

        ctx.beginPath()
        ctx.arc(n.x, n.y, currentRadius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(103, 245, 154, 0.55)'
        ctx.shadowColor = 'rgba(103, 245, 154, 0.5)'
        ctx.shadowBlur = 5
        ctx.fill()
        ctx.shadowBlur = 0
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render)
      }
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ opacity: 0.95 }}
      />
    </div>
  )
}
