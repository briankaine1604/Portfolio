import './globals.css'


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