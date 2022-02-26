import { Ref } from 'vue'
import { dom } from './dom'

export function getOwnerDocument<T extends Element | Ref<Element | null>>(
  element: T | null | undefined
) {
  if (element instanceof Element) return element.ownerDocument
  if (element && element.hasOwnProperty('value')) {
    let domElement = dom(element)
    if (domElement) {
      return domElement.ownerDocument
    }
  }

  return document
}
