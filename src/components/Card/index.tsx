import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardHeader, styled } from "@mui/material";
import InStock from "../Icons/in-stock";
import HoverRating from "../Ratings";
import { ProductProps } from "../../store/product/types";

const StatusContainer = styled("div")(
  ({ theme }) =>
    `
    color: ${theme.palette.success.main};
    font-size: 10px;
    font-weight: 400;
    display: flex;
    flex-direction: row;
    align-items: center;
    & > span {
        margin-left: 5px;
        font-family: Inter;
    }
`
);

const Description = styled(Typography)`
  && {
    text-overflow: ellipsis;
  }
`;

const StyledCardContent = styled(CardContent)`
  && {
    padding: 8px;
    & > p {
      overflow: hidden;
      white-space: nowrap;
    }
  }
`;

const AddToCart = styled(Button)(`
    font-size: 14px;
    font-weight: 400;
    background-color: transparent;
    border: none;
    text-transform: capitalize;
`);

interface ProductCardProps extends ProductProps {
  status: string;
  onClick: () => void;
}

const ProductCard: React.FunctionComponent<ProductCardProps> = ({
  status,
  description,
  price,
  image,
  rating,
  onClick,
}) => {
  return (
    <Card sx={{ boxShadow: "none" }}>
      <CardHeader
        subheader={
          <StatusContainer>
            <InStock />
            <span>{status}</span>
          </StatusContainer>
        }
      />
      <CardMedia sx={{ height: 140 }} image={image} title="green iguana" />
      <StyledCardContent>
        <HoverRating count={rating.count} rate={rating.rate} />
        <Description variant="body2" color="text.secondary" fontFamily="Inter">
          {description}
        </Description>
      </StyledCardContent>
      <CardActions sx={{flexDirection: "row", justifyContent:"space-between"}}>
        <Typography sx={{ fontFamily: "Inter", fontSize: 14, fontWeight: 400 }}>
          ${price}
        </Typography>
        <AddToCart
          onClick={() => onClick()}
        >
          Add To Cart
        </AddToCart>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
