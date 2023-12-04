import { Typography } from "@mui/material";
import { Container, styled } from "@mui/system";
import Box from "@mui/system/Box";
import React from "react";

const Input = styled("input")(`
    height: 50px;
    width: 391px;
    border-radius: 4px;
    border: solid thin white;
    background-color: transparent;
`);

const Button = styled("button")(`
    color: white;
    border: solid thin #0156FF;
    border-radius: 50px;
    width: 151px;
    height: 50px;
    background-color: #0156FF;
    font-size: 14px;
    font-weight: 600;
    margin-left: 15px;
`);

const Footer: React.FunctionComponent = () => {
  return (
    <Box sx={{ height: 520, backgroundColor: "primary.main" }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 5,
          }}
        >
          <Box>
            <Typography color="secondary.light" fontSize={38} fontWeight={500}>
              Sign Up To our Newsletter.
            </Typography>
            <Typography color="secondary.light" fontSize={16} fontWeight={300}>
              Be the first to hear about the latest offers.
            </Typography>
          </Box>
          <Box>
            <Input type="Text" placeholder="Your email" />
            <Button type="submit">Subscribe</Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default Footer;
