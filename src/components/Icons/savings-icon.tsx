import * as React from "react"
import { SVGProps } from "react"
const SavingsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={65}
    height={68}
    fill="none"
    {...props}
  >
    <circle cx={32.5} cy={34.032} r={32.5} fill="#0156FF" />
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        d="M45.205 22.526a.787.787 0 0 0-1.484.52c1.208 3.47-1.19 6.062-3.017 7.45l-.738-1.057c-.249-.355-.804-.65-1.235-.656l-4.145.018a2.81 2.81 0 0 0-1.426.44l-12.212 8.563a1.313 1.313 0 0 0-.321 1.825l5.55 7.94c.416.592 1.08.52 1.673.107l12.212-8.564c.35-.248.757-.784.9-1.194l1.297-4.088c.143-.408.056-1.031-.193-1.386l-.45-.645c2.455-1.88 5.003-5.205 3.589-9.273Zm-5.683 12.166a2.091 2.091 0 0 1-3.259-2.081 2.09 2.09 0 0 1 3.29-1.332 8.017 8.017 0 0 1-.643.358.788.788 0 0 0 .337 1.499.788.788 0 0 0 .334-.077c.252-.12.522-.261.805-.429a2.1 2.1 0 0 1-.864 2.062Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M20 22h26v26H20z" />
      </clipPath>
    </defs>
  </svg>
)
export default SavingsIcon
