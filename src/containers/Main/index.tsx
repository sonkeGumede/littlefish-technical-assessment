import BannerAlert from "../../components/Alert/banner-alert";
import Banner from "../../components/Banner";
import Reviews from "../../components/Banner/reviews";
import Layout from "../../layout";
import { addToCart, setProducts } from "../../store/product/reducer";
import Product from "../Product";
import Services from "../Services";
import { useGetAllProductsQuery } from "./../../store/product/services";
import { useAppDispatch } from "../../store/hooks";
import { useEffect } from "react";
const Main: React.FunctionComponent = () => {
  const { data } = useGetAllProductsQuery({});
  const disptach = useAppDispatch();

  const handleCart = (id: number) => {
    disptach(addToCart({ id }));
  };

  useEffect(() => {
    disptach(setProducts(data));
  }, [data]);

  const newProducts = [...data || []].splice(5,4)
  return (
    <Layout>
      <Banner />
      <Product
        heading={"New Product"}
        products={newProducts}
        addToCart={handleCart}
      />
      <BannerAlert />
      <Product
        heading={"All Products"}
        products={data}
        addToCart={handleCart}
      />
      <Reviews />
      <Services />
    </Layout>
  );
};

export default Main;
