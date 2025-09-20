import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook to manage hover and click states for a popover component.
 * It allows the popover to open on hover and stay open on click.
 * It also handles a small delay on mouse leave to prevent flickering.
 */
export function useIsHover() {
  const [isHovering, setIsHovering] = useState(false)
  const [isClickedOpen, setIsClickedOpen] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const isOpened = isClickedOpen || isHovering

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [])

  function handleTriggerClick() {
    setIsClickedOpen(prev => !prev)
  }

  // If popover is closed and it was opened by click, reset click state
  function onOpenChange(open: boolean) {
    if (!open && isClickedOpen) {
      setIsClickedOpen(false)
    }
  }

  function onMouseEnter() {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    setIsHovering(true)
  }

  // Add a small delay to prevent flickering when moving between trigger and content
  function onMouseLeave() {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovering(false)
    }, 100)
  }

  return {
    /**
     * Whether the popover is currently opened.
     */
    isOpened,
    /**
     * Ref to attach to the container element.
     */
    containerRef,
    /**
     * Handler for trigger click to toggle click state.
     */
    handleTriggerClick,
    /**
     * Handler for popover open state changes.
     */
    onOpenChange,
    /**
     * Handler for mouse enter to set hover state.
     * This is need to be in the `trigger` and the `content` to prevent flickering.
     */
    onMouseEnter,
    /**
     * Handler for mouse leave to unset hover state with delay.
     * This is need to be in the `trigger` and the `content` to prevent flickering.
     */
    onMouseLeave,
  }
}
