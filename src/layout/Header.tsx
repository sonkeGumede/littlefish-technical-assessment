import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/system";
import React from "react";
import { Facebook, Instagram } from "@mui/icons-material";
import DropDown from "../components/DropDown";
import Logo from "../components/Icons/logo";
import Cart from "../components/Icons/cart";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import CartModal from "../components/Modal";
import InteractiveList from "../components/List";
import groupBy from "lodash/groupBy";
import { deleteFromCart } from "../store/product/reducer";

const StyledContainer = styled("div")(
  ({ theme }) =>
    `height: 136px;
    width: 100%;
    border-bottom: solid 1px ${theme.palette.secondary.main}
`
);

const TopBar = styled("div")(
  ({ theme }) => `
    display: flex;
    min-height: 44px;
    width: 100%;
    background-color: ${theme.palette.primary.dark}
  `
);

const InnerTopBar = styled(Container)(`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-self: center;
`);

const MainBar = styled(Container)(`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 11px;
    align-items: center;
`);

const AddressContainer = styled("div")(`
    display: flex;
    & > h6 {
        margin-right: 5px;
    } 
`);

const ContactUsContainer = styled(`div`)(`
    display: flex;
    flex-direction: row;
    align-items: end;
`);

const FacebookIcon = styled(Facebook)(
  ({ theme }) =>
    `
    color: ${theme.palette.secondary.light};
    margin-left: 5px;
`
);

const InstagramIcon = styled(Instagram)(
  ({ theme }) =>
    `
    color: ${theme.palette.secondary.light};
    margin-left: 5px;
`
);

const LogoContainer = styled("div")(
  `
    flex-direction: row;
    align-items: center;
    display: flex;
    `
);

const Header: React.FunctionComponent = () => {
  const [isOpen, setOpen] = React.useState<boolean>(false);
  const [mappeProdcut, setMappedProduct] = React.useState<any>([]);
  const [total, setTotal] = React.useState<number>(0);
  const dispatch = useAppDispatch();
  const { cart, products }: any = useAppSelector((state: any) => state.product);
  
  const handleClick = () => {
    setOpen(true);
  };

  const handleDelete = (id: number) => {
    dispatch(deleteFromCart({ id }));
  };

  React.useEffect(() => {
    if (products) {
      const holder = [];
      let totalPrice = 0;
      for (const x of products) {
        for (const i of cart) {
          if (x.id === i) {
            holder.push(x);
            totalPrice = totalPrice + x.price
          }
        }
      }
      const results = Object.values(groupBy(holder, "id")).map((x: any) => ({
        [x[0].title]: x,
      }));

      setTotal(totalPrice);
      setMappedProduct(results);
    }
  }, [products, cart]);
 
  return (
    <StyledContainer>
      <TopBar>
        <InnerTopBar>
          <DropDown />
          <AddressContainer>
            <Typography
              color="secondary.main"
              fontFamily="Inter"
              variant="subtitle2"
            >
              Visit our showroom in 1234 Street Address City Address, 1234
            </Typography>
            <Typography
              color="secondary.light"
              sx={{ textDecoration: "underline" }}
              fontFamily="Inter"
              variant="subtitle2"
            >
              Contact Us
            </Typography>
          </AddressContainer>
          <ContactUsContainer>
            <Typography
              color="secondary.light"
              fontFamily="Inter"
              variant="subtitle2"
            >
              Call Us: (00) 1234 5678
            </Typography>
            <FacebookIcon />
            <InstagramIcon />
          </ContactUsContainer>
        </InnerTopBar>
      </TopBar>
      <MainBar>
        <LogoContainer>
          <Logo />
          <Typography variant="subtitle2" fontWeight={600} fontFamily="Inter">
            OurCommerce
          </Typography>
        </LogoContainer>
        <Cart count={cart.length} onClick={handleClick} />
      </MainBar>
      <CartModal isOpen={isOpen} setOpen={setOpen} total={total}>
        <InteractiveList products={mappeProdcut} onDelete={handleDelete} />
      </CartModal>
    </StyledContainer>
  );
};
export default Header;
