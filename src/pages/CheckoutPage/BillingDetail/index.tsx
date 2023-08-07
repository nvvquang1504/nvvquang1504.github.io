import Container from "../../../components/Container";
import { Typography } from "@mui/material";
import VerticalStack from "../../../components/VerticalStack";
import InputField from "../../../components/InputField";
const BillingDetail = () => {
  return (
    <Container>
      <Typography fontSize={"2.25rem"} py={4}>
        Billing Detail
      </Typography>
      <VerticalStack
        width={"48%"}
        spacing={2}
        sx={(theme) => ({
          [theme.breakpoints.between("mobile", "tablet")]: {
            width: "100%",
          },
        })}
      >
        <InputField label={"Full Name"} isRequired={true} />
        <InputField label={"Street Address"} isRequired={true} />
        <InputField label={"Town / City"} isRequired={true} />
        <InputField label={"Phone"} isRequired={true} />
        <InputField label={"Email Address"} isRequired={true} />
      </VerticalStack>
    </Container>
  );
};

export default BillingDetail;
