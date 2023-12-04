import * as React from "react"
import { SVGProps } from "react"
const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={85}
    height={69}
    fill="none"
    {...props}
  >
    <path
      fill="#0156FF"
      d="m42.033 13.945-16.736 9.919V36.07l16.736 9.918 13.426-7.63v3.625l-13.426 8.01-16.736-10.108v4.386L42.033 54l16.736-9.727V32.065l-13.425 7.82v-3.814l13.425-8.011v-4.196l-16.736-9.919Z"
    />
  </svg>
)
export default Logo;
