// Composable for generating unique IDs (similar to React's useId)
import { ref, getCurrentInstance } from 'vue'

let idCounter = 0

export function useId() {
  const instance = getCurrentInstance()
  const id = ref(`vue-${instance?.uid || idCounter++}`)
  return id.value
}
