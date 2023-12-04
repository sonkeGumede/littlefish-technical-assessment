import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";

interface ServicesCardProps {
  title: string;
  description: string;
  children?: any;
}
const ServicesCard: React.FunctionComponent<ServicesCardProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CardMedia>{children}</CardMedia>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          gutterBottom
          fontFamily="Inter"
          fontSize={18}
          fontWeight={700}
          component="div"
        >
          {title}
        </Typography>
        <Typography
          fontFamily="Inter"
          fontSize={14}
          fontWeight={400}
          color="text.secondary"
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServicesCard;
