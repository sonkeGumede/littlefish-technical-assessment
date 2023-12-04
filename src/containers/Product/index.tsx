import { Box, Grid, Typography } from "@mui/material";
import MediaCard from "../../components/Card";
import { ProductProps } from "../../store/product/types";

interface OwnProductProps {
  heading: string;
  products?: Array<ProductProps>;
  addToCart: (id: number) => void;
}
const Product: React.FunctionComponent<OwnProductProps> = ({
  heading,
  products,
  addToCart,
}) => {
  return (
    <Box sx={{ paddingBottom: 5 }} maxHeight="sm">
      <Typography
        fontFamily="Inter"
        fontSize={22}
        fontWeight={600}
        marginTop={4}
      >
        {heading}
      </Typography>
      <Grid container spacing={1}>
        {products?.map((product: ProductProps) => (
          <Grid md={3} sm={4} xs={12} item key={product.id}>
            <MediaCard
              status={"in-stock"}
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
              id={0}
              category={""}
              rating={product.rating}
              onClick={() => addToCart(product.id)}
              name={undefined}            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Product;
