import * as React from "react"
import { SVGProps } from "react"
const HeadPhones = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={65}
    height={68}
    fill="none"
    {...props}
  >
    <circle cx={32.5} cy={33.5} r={32.5} fill="#0156FF" />
    <path
      fill="#fff"
      d="M32.912 21.392c-6.805 0-12.342 5.537-12.342 12.342v5.113c0 1.264 1.107 2.292 2.469 2.292h1.234a1.234 1.234 0 0 0 1.234-1.234v-6.347a1.234 1.234 0 0 0-1.234-1.235h-1.12c.685-4.776 4.795-8.462 9.76-8.462 4.963 0 9.073 3.686 9.759 8.462h-1.12a1.235 1.235 0 0 0-1.235 1.235v7.581a2.47 2.47 0 0 1-2.468 2.468H35.38v-1.234h-4.936v3.703h7.405a4.942 4.942 0 0 0 4.937-4.937c1.36 0 2.468-1.028 2.468-2.292v-5.113c0-6.805-5.537-12.342-12.342-12.342Z"
    />
  </svg>
)
export default HeadPhones
