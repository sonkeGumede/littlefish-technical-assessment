import { styled } from "@mui/material/styles";

const ImageContainer = styled("div")(
  ({ theme }) =>
    `
    background-color: ${theme.palette.primary.dark};
    min-height: 328px;
    background-image: url('./banner.jpg');
    background-repeat: no-repeat;
    background-size: contain;
    width: 100%;
`
);

const Banner: React.FunctionComponent = () => {
  return (
    <ImageContainer>
    </ImageContainer>
  );
};

export default Banner;
