import { styled } from "@mui/material/styles";
import Footer from "./Footer";
import Header from "./Header";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";

const StyledBox = styled(Box)(`
    display: flex;
    flex-direction: column;
`);

const Content = styled(Container)(``);

interface LayoutProps {
  children?: any;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <StyledBox>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </StyledBox>
  );
};
export default Layout;
