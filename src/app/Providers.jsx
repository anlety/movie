"use client"

import { ThemeProvider } from 'next-themes'
import React from 'react'

export default function Providers({children}) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className='dark:bg-blue-600 dark:text-white text-gray-700 trandsition duration-300 min-h-screen select-none'>
          {children}
      </div>

    </ThemeProvider>
  )
}
