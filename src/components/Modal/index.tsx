import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiDialog-paper": {
    borderRadius: 0,
  },
}));

const CheckoutButton = styled("button")(
  ({ theme }) =>
    `
    width: 250px;
    height: 37px;
    border-radius: 50px;
    color: ${theme.palette.secondary.light};
    background-color: ${theme.palette.primary.main};
    border: none;
`
);

const SubTotal = styled("div")(`
    display: flex;
    flex-direction: row;
`);

interface ModalProps {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
  children?: any;
  total: number;
}

const Modal: React.FunctionComponent<ModalProps> = ({
  isOpen,
  setOpen,
  children,
  total
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
        maxWidth="xs"
      >
        <DialogTitle
          sx={{ m: 0, p: 2, alignSelf: "center" }}
          id="customized-dialog-title"
        >
          My Cart
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>{children}</DialogContent>
        <DialogActions
          sx={{ justifyContent: "center", flexDirection: "column" }}
        >
          <SubTotal>
            <Typography
              alignSelf="center"
              color="secondary.dark"
              fontWeight={600}
              fontSize={14}
            >
              Subtotal:{" "}
            </Typography>
            <Typography sx={{ paddingLeft: 1 }} fontWeight={600} fontSize={18}>
              ${total}
            </Typography>
          </SubTotal>
          <CheckoutButton onClick={handleClose}>Go to checkout</CheckoutButton>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
};

export default Modal;
