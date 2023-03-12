import MuiLink from '@mui/material/Link'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import React, { ForwardRefRenderFunction, forwardRef } from 'react'

import { Anchor, NextLinkComposed } from 'components/atoms'

import { LinkProps } from './Link.interface'

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/api-reference/next/link
const Link: ForwardRefRenderFunction<HTMLAnchorElement, LinkProps> = (
  {
    activeClassName = 'active',
    as,
    className: classNameProps,
    href,
    legacyBehavior,
    linkAs: linkAsProp,
    locale,
    noLinkStyle,
    prefetch,
    replace,
    role, // Link don't have roles.
    scroll,
    shallow,
    ...other
  },
  ref,
) => {
  const router = useRouter()
  const pathname = typeof href === 'string' ? href : href.pathname
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName,
  })

  const isExternal = typeof href === 'string' && (href.indexOf('http') === 0 || href.indexOf('mailto:') === 0)

  if (isExternal) {
    if (noLinkStyle) {
      return <Anchor className={className} href={href} ref={ref} {...other} />
    }

    return <MuiLink className={className} href={href} ref={ref} {...other} />
  }

  const linkAs = linkAsProp || as
  const nextjsProps = {
    to: href,
    linkAs,
    replace,
    scroll,
    shallow,
    prefetch,
    legacyBehavior,
    locale,
  }

  if (noLinkStyle) {
    return <NextLinkComposed className={className} ref={ref} {...nextjsProps} {...other} />
  }

  return <MuiLink component={NextLinkComposed} className={className} ref={ref} {...nextjsProps} {...other} />
}

export default forwardRef(Link)
