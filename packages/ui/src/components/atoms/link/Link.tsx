import { LinkProps } from './Link.type'

import { ExternalLink, InternalLink } from './Link.partials'

export const Link = ({ external, ...props }: LinkProps) => {
  if (external) {
    return ExternalLink(props)
  }

  return InternalLink(props)
}
