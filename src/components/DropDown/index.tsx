import { styled } from "@mui/material/styles";

const StyledSelect = styled("select")(
  ({ theme }) =>
    `
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
    background-color: transparent;
    border: none;
    color: ${theme.palette.secondary.light}
`
);

const StyledLabel = styled("label")(
  ({ theme }) =>
    `
    font-size: 12px;
    font-weight: 600;
    color: ${theme.palette.secondary.main}
`
);

const DropDown: React.FunctionComponent = () => {
  return (
    <div>
      <StyledLabel>Mon-Thu:</StyledLabel>
      <StyledSelect>
        <option>9:00 AM - 5:30 PM</option>
      </StyledSelect>
    </div>
  );
};

export default DropDown;
