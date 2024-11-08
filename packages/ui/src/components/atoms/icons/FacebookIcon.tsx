import { cx } from 'class-variance-authority'
import React from 'react'

interface IconProps {
  className?: string
  style?: React.CSSProperties
}

export const FacebookIcon = ({
  className,
  style
}: IconProps): React.ReactElement => (
  <svg
    className={cx('fill-current', className)}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <g clipPath="url(#clip0_879_3476)">
      <path
        d="M7.50006 15V15.5H8.00006H9.50006V21.1672C5.46937 20.0671 2.50006 16.3823 2.50006 12C2.50006 6.75614 6.7562 2.5 12.0001 2.5C17.2439 2.5 21.5001 6.75614 21.5001 12C21.5001 16.7404 18.031 20.6645 13.5001 21.3818V15.5H16.0001H16.5001V15V12V11.5H16.0001H13.5001V10C13.5001 9.72614 13.7262 9.5 14.0001 9.5H16.0001H16.5001V9V6V5.5H16.0001H13.5001C11.2939 5.5 9.50006 7.29386 9.50006 9.5V11.5H8.00006H7.50006V12V15Z"
        stroke="#FAFAFA"
      />
    </g>
    <defs>
      <clipPath id="clip0_879_3476">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
)
