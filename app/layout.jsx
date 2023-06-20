import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: "Ikeogu Brian's Portfolio"
}

import React from 'react'

const RootLayout = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default RootLayout;