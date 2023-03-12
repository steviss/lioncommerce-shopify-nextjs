import { LinkProps as MuiLinkProps } from '@mui/material/Link'
import { LinkProps as NextLinkProps } from 'next/link'

import { NextLinkComposedProps } from 'components/atoms'

export type LinkProps = {
  activeClassName?: string
  as?: NextLinkProps['as']
  href: NextLinkProps['href']
  linkAs?: NextLinkProps['as'] // Useful when the as prop is shallow by styled().
  noLinkStyle?: boolean
} & Omit<NextLinkComposedProps, 'to' | 'linkAs' | 'href'> &
  Omit<MuiLinkProps, 'href'>
