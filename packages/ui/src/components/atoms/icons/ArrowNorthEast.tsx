import React from 'react'
import { cn } from 'src/shared/utils'

type ArrowNorthEastProps = {
  className?: string
  style?: React.CSSProperties
}

export const ArrowNorthEast = ({
  className,
  style,
}: ArrowNorthEastProps): React.ReactElement => (
  <svg
    className={cn('text-primary', className)}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <g clipPath="url(#clip0_147_13751)">
      <path
        d="M9 5V7H15.59L4 18.59L5.41 20L17 8.41V15H19V5H9Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_147_13751">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
)
