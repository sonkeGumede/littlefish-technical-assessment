import { MobileStepper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const StyledBox = styled(Box)(`
    padding: 50px;
    background: #F5F7FF;
`);

const BottomContainer = styled("div")(`
    display: flex;
    lex-direction: row;
    justify-content: space-between;
`);

const StyledButton = styled("button")(`
    color: #0156FF;
    border: solid thin #0156FF;
    border-radius: 50px;
    height: 37px;
    background-color: transparent;
`);

const Reviews: React.FunctionComponent = () => {
  return (
    <StyledBox>
      <Box display="flex" flexDirection="row" marginBottom={4}>
        <Typography fontSize={96} lineHeight={0} fontFamily="Poppins">
          "
        </Typography>
        <Typography fontFamily="Inter" color="primary.main" fontSize={18} fontWeight={400}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          mauris risus, laoreet et eleifend non, suscipit id tellus. Nam pretium
          odio augue, vel viverra leo elementum in. Curabitur malesuada ut lacus
          non varius. Fusce sem urna, fringilla ac pulvinar eget, vehicula eu
          dui. Integer vitae consequat risus. In hac habitasse platea dictumst.
        </Typography>
      </Box>
      <BottomContainer>
        <StyledButton>Leave Us A Review</StyledButton>
        <div>
          <Typography fontSize={14} fontFamily="Inter" color="primary.main">- Tama Brown</Typography>
          <MobileStepper
            variant="dots"
            steps={6}
            position="static"
            activeStep={1}
            sx={{ maxWidth: 400, flexGrow: 1, backgroundColor: "transparent" }}
            backButton={undefined}
            nextButton={undefined}
          />
        </div>
      </BottomContainer>
    </StyledBox>
  );
};
export default Reviews;
