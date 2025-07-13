"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      {...props}
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange={false}
      attribute="class"
    >
      {children}
    </NextThemesProvider>
  )
}
