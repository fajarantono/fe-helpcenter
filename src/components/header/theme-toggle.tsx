"use client"

import React from "react"
import { Eclipse } from "@/assets/icons"
import { useTheme } from "next-themes"
import { Button } from "../ui"

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >

        <Eclipse  className="h-[1.5rem] w-[1.3rem]" />

    </Button>
  )
}