/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)'],
        display: ['var(--font-display)'],
        mono: ['var(--font-mono)'],
        pixel: ['var(--font-pixel)'],
      },
      colors: {
        canvas: 'var(--color-canvas)',
        surface: 'var(--color-panel)',
        primary: 'var(--color-primary)',
        ink: 'var(--color-ink)',
        muted: 'var(--color-muted)',
      },
      borderRadius: { sm: 'var(--radius-sm)', md: 'var(--radius-md)', lg: 'var(--radius-lg)' },
    },
  },
  plugins: [],
}
