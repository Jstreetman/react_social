import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Loginsnack = ({ open, handleCloseSnack, Transition }) => {
  return (
    <div>
      <Snackbar
        open={open}
        onClose={handleCloseSnack}
        TransitionComponent={Transition}
      >
        <Alert
          severity="success"
          onClose={handleCloseSnack}
          sx={{ width: "100%" }}
        >
          Login Successful
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Loginsnack;
