import NextLink from 'next/link'
import React, { ForwardRefRenderFunction, forwardRef } from 'react'

import { Anchor } from 'components/atoms'

import { NextLinkComposedProps } from './NextLinkComposed.interface'

const NextLinkComposed: ForwardRefRenderFunction<HTMLAnchorElement, NextLinkComposedProps> = (
  { to, linkAs, replace, scroll, shallow, prefetch, legacyBehavior = true, locale, ...other },
  ref,
) => {
  return (
    <NextLink
      href={to}
      prefetch={prefetch}
      as={linkAs}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref
      locale={locale}
      legacyBehavior={legacyBehavior}
    >
      <Anchor ref={ref} {...other} />
    </NextLink>
  )
}
export default forwardRef(NextLinkComposed)
