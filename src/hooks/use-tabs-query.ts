'use client'

import { useCallback, useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type Options = {
  /**
   * The query parameter key to use for the tab
   * @default 'tab'
   */
  queryKey?: string
  /**
   * The default value to use for the tab when no tab is selected
   * if you want to redirect to a default tab when none is selected
   * This ensures that the URL always has a tab parameter
   * `Experimental`
   */
  defaultValue?: string
}

/**
 * A custom hook to manage tab state in the URL query parameters.
 * @returns An object containing the active tab and a function to change the tab
 */
export function useTabsQuery({ queryKey = 'tab', defaultValue }: Options = {}) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Use state to avoid SSR hydration mismatch
  const [activeTab, setActiveTab] = useState(() => {
    // Only access searchParams on client side
    if (typeof window === 'undefined') {
      return defaultValue || null
    }
    return searchParams.get(queryKey) || defaultValue || null
  })

  useEffect(() => {
    // Sync state with URL on client side
    const currentTab = searchParams.get(queryKey)
    if (currentTab !== activeTab) {
      setActiveTab(currentTab || defaultValue || null)
    }
  }, [searchParams, queryKey, defaultValue, activeTab])

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    if (!searchParams.get(queryKey) && defaultValue) {
      const url = new URLSearchParams(searchParams.toString())
      url.set(queryKey, defaultValue)
      router.replace(pathname + '?' + url.toString())
    }
  }, [defaultValue, pathname, queryKey, router, searchParams])

  // Create query string with updated tab parameter
  const createQueryString = useCallback(
    (value: string) => {
      if (typeof window === 'undefined') return ''
      const params = new URLSearchParams(searchParams.toString())
      params.set('tab', value)
      return params.toString()
    },
    [searchParams],
  )

  function handleTabChange(value: string) {
    if (typeof window === 'undefined') return
    setActiveTab(value) // Update state immediately for UI responsiveness
    router.push(pathname + '?' + createQueryString(value))
  }

  return { activeTab, handleTabChange }
}
