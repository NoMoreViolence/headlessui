import { MutableRefObject } from 'react'

export function getOwnerDocument<T extends Element | MutableRefObject<Element | null>>(
  element: T | null | undefined
) {
  if (element instanceof Element) return element.ownerDocument
  if (element && element.hasOwnProperty('current')) {
    if (element.current instanceof Element) {
      return element.current.ownerDocument
    }
  }

  return document
}
