import * as React from "react"
import { SVGProps } from "react"
const InStock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={10}
    fill="none"
    {...props}
  >
    <circle cx={5.5} cy={5} r={5} fill="#78A962" />
    <path stroke="#fff" strokeLinecap="round" d="M7.5 4 4.984 7 3.5 5.279" />
  </svg>
)
export default InStock;
