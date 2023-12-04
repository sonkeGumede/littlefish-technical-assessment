import * as React from "react"
import { SVGProps } from "react"
const CancelIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <circle
      cx={10}
      cy={10}
      r={9.25}
      fill="#fff"
      stroke="#CACDD8"
      strokeWidth={1.5}
    />
    <path
      stroke="#A2A6B0"
      strokeLinecap="round"
      d="m7 7 6.5 6.5M13.5 7 7 13.5"
    />
  </svg>
)
export default CancelIcon;
