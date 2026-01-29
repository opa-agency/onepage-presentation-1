// Composable for theme management (dark/light mode)
import { ref, onMounted, watch } from 'vue'

const theme = ref('dark')
const resolvedTheme = ref('dark')

export function useTheme() {
  onMounted(() => {
    // Check localStorage and system preference
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (stored) {
      theme.value = stored
      resolvedTheme.value = stored
    } else if (prefersDark) {
      theme.value = 'dark'
      resolvedTheme.value = 'dark'
    } else {
      // Default to dark mode
      theme.value = 'dark'
      resolvedTheme.value = 'dark'
    }
    
    applyTheme(resolvedTheme.value)
    
    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light'
        resolvedTheme.value = newTheme
        applyTheme(newTheme)
      }
    })
  })
  
  watch(theme, (newTheme) => {
    resolvedTheme.value = newTheme
    localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
  })
  
  function applyTheme(themeValue) {
    if (themeValue === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
  
  function setTheme(newTheme) {
    theme.value = newTheme
  }
  
  return {
    theme,
    resolvedTheme,
    setTheme
  }
}
