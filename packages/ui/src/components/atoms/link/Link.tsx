import { LinkProps } from './Link.type'

import { ExternalLink, InternalLink } from './Link.partials'

export const Link = ({ external, ...props }: LinkProps): React.ReactElement => {
  if (external) {
    return ExternalLink(props)
  }

  return InternalLink(props)
}
