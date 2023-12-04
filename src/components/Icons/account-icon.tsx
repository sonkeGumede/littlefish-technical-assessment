import * as React from "react"
import { SVGProps } from "react"
const AccountIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={65}
    height={68}
    fill="none"
    {...props}
  >
    <circle cx={32.5} cy={34.032} r={32.5} fill="#0156FF" />
    <path
      fill="#fff"
      d="M35.82 46.18 33 49l-2.82-2.82C24.637 44.9 20.5 39.93 20.5 34c0-6.9 5.6-12.5 12.5-12.5S45.5 27.1 45.5 34c0 5.93-4.138 10.9-9.68 12.18Zm-10.291-7.91c1.835 2.737 4.59 4.48 7.671 4.48 3.08 0 5.836-1.741 7.67-4.48a11.21 11.21 0 0 0-7.67-3.02 11.21 11.21 0 0 0-7.671 3.02ZM33 32.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
    />
  </svg>
)
export default AccountIcon
