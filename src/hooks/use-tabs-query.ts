import { useCallback, useEffect } from 'react'
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

  useEffect(() => {
    if (!searchParams.get(queryKey) && defaultValue) {
      const url = new URLSearchParams(searchParams.toString())

      url.set(queryKey, defaultValue)
      router.replace(pathname + '?' + url.toString())
    }
  }, [defaultValue, pathname, queryKey, router, searchParams])

  // Create query string with updated tab parameter
  const createQueryString = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set('tab', value)

      return params.toString()
    },
    [searchParams],
  )

  function handleTabChange(value: string) {
    router.push(pathname + '?' + createQueryString(value))
  }

  const activeTab = searchParams.get(queryKey)

  return { activeTab, handleTabChange }
}
