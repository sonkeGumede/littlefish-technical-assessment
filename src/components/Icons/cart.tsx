import { styled } from "@mui/material/styles";
import * as React from "react";
import { SVGProps } from "react";

const CartContainer = styled("div")(`
    height: 20px;
    cursor: pointer;
`);
const Count = styled(`div`)(
  ({ theme }) =>
    `
    background-color: ${theme.palette.info.main};
    border-radius: 10px;
    height: 15px;
    width: 15px;
    position: relative;
    top: -38px;
    left: 17px;
    color: ${theme.palette.secondary.light};
    & > span {
        font-size: 10px;
        font-weight: 700;
        position: absolute;
        left: 4px;
        top: 2px;
    }
`
);

interface CartIconProps extends SVGProps<SVGSVGElement> {
    count: number;
    onClick: ()=>void;
}

const Cart:React.FunctionComponent<CartIconProps> = (props) => (
  <CartContainer onClick={props.onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      fill="none"
      {...props}
    >
      <path
        fill="#000"
        d="M14.583 20.833a2.084 2.084 0 1 0 0-4.167 2.084 2.084 0 0 0 0 4.167Zm-7.291 0a2.083 2.083 0 1 0 0-4.166 2.083 2.083 0 0 0 0 4.166ZM20.873 6.17a1.002 1.002 0 0 0 0-2.003h-1.199c-.94 0-1.752.652-1.956 1.568l-1.305 5.878a2.004 2.004 0 0 1-1.957 1.568H6.631L5.13 7.171h9.735a1.002 1.002 0 0 0 0-2.002H5.129a2.003 2.003 0 0 0-1.943 2.49l1.502 6.008a2.003 2.003 0 0 0 1.943 1.517h7.825a4.006 4.006 0 0 0 3.912-3.137l1.306-5.877h1.199Z"
      />
    </svg>
    <Count>
      <span>{props.count}</span>
    </Count>
  </CartContainer>
);

export default Cart;
