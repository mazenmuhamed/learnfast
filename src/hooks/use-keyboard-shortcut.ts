import { useEventListener } from 'usehooks-ts'

/**
 * A custom hook to handle keyboard shortcuts.
 * It listens for a combination of a main key (like `ctrl`, `alt`, or `shift`) and a secondary key, and triggers the provided handler function when the combination is pressed.
 * @param mainKey choice of `ctrl`, `alt`, or `shift`
 * @param secondaryKey the secondary key to be pressed in combination with the main key
 * @param handler the function to be called when the shortcut is activated
 */
export function useKeyboardShortcut(
  mainKey: 'ctrl' | 'alt' | 'shift',
  secondaryKey: string,
  handler: (e: KeyboardEvent) => void,
) {
  useEventListener('keydown', e => {
    if (e[`${mainKey}Key`] && e.key === secondaryKey) {
      e.preventDefault()
      handler(e)
    }
  })
}
