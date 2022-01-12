import type {ReactNode} from 'react'

type LayoutProps = {
  orientation?: string
  children: ReactNode
}

export const HORIZONTAL = 'horizontal'

const Layout = ({
  orientation = HORIZONTAL,
  children,
}: LayoutProps) => {
  return <div>{children}</div>
}

export default Layout
