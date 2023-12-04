import * as React from "react"
import { SVGProps } from "react"
const CheckAvsilability = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={10}
    fill="none"
    {...props}
  >
    <circle cx={5.5} cy={5} r={5} fill="#C94D3F" />
    <path
      fill="#fff"
      d="m6.177 5.856.35-.35a.342.342 0 0 1 .365-.075l.427.17a.34.34 0 0 1 .212.313v.781a.34.34 0 0 1-.356.336C4.186 6.845 3.583 4.314 3.47 3.345a.339.339 0 0 1 .339-.376h.755a.338.338 0 0 1 .312.212l.17.427a.338.338 0 0 1-.073.365l-.35.35s.202 1.365 1.555 1.533Z"
    />
  </svg>
)
export default CheckAvsilability
