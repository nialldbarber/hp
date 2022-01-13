import type {ReactNode} from 'react'

import {Header} from 'src/components/Header'

type LayoutProps = {
  orientation?: string
  children: ReactNode
}

export const HORIZONTAL = 'horizontal'

const Layout = ({
  orientation = HORIZONTAL,
  children,
}: LayoutProps) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  )
}

export default Layout
