import { LinkProps } from './Link.type'

import { ExternalLink, InternalLink } from './Link.partials'

export const Link = (props: LinkProps) => {
  const { external } = props

  if (external) {
    return ExternalLink(props)
  }

  return InternalLink(props)
}
