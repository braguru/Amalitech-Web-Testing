// 'use client'
import { Link } from '@amt-web/ui'
import { Link as LinkBlokProps } from '../../sanity/sanity.types'

// TODO: write a mapper util to transform schema to props of Link Atom
export const LinkBlok = ({ label }: LinkBlokProps): React.ReactElement => (
  <Link href="www.example.com" external label={label} />
)
