import { LinkProps as NextLinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'

export interface NextLinkComposedProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>,
    Omit<NextLinkProps, 'href' | 'as' | 'passHref' | 'onMouseEnter' | 'onClick' | 'onTouchStart'> {
  to: NextLinkProps['href']
  linkAs?: NextLinkProps['as']
}
