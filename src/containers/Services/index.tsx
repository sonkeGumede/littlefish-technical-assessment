import Box from "@mui/system/Box";
import ServicesCard from "../../components/Card/services-card";
import HeadPhones from "../../components/Icons/head-phones";
import AccountIcon from "../../components/Icons/account-icon";
import SavingsIcon from "../../components/Icons/savings-icon";

const Services: React.FunctionComponent = () => {
  return (
    <Box sx={{ padding: 4, display: "flex" }}>
      <ServicesCard
        title={"Product Support"}
        description={
          "Up to 3 years on-site warranty, available for your peace of mind"
        }
      >
        <HeadPhones />
      </ServicesCard>
      <ServicesCard
        title={"Personal Account"}
        description={
          "With big discounts, free delivery and a dedicated support specialist."
        }
      >
        <AccountIcon />
      </ServicesCard>
      <ServicesCard
        title={"Amazing Savings"}
        description={
          "Up to 70% off new Products, you can be sure of the best price."
        }
      >
        <SavingsIcon />
      </ServicesCard>
    </Box>
  );
};

export default Services;
