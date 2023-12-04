import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import Box from "@mui/system/Box";

const StyledBox = styled(Box)(`
    height: 70px;
    background: #F5F7FF;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    & > p {
        color: #272560;
        font-family: Inter;
    }

`);

const BannerAlert: React.FunctionComponent = () => {
  return <StyledBox component="section">
    <Typography fontWeight={600}>Own </Typography> <Typography marginLeft={1}> it now, Up to 6 months interest fee</Typography>
    <Typography fontSize={14} marginLeft={1} sx={{textDecoration: "underline"}}> learn more</Typography>
  </StyledBox>;
};

export default BannerAlert;
