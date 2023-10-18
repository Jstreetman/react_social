import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const Registersnack = ({ open, handleCloseSnack, Transition }) => {
  return (
    <div>
      <Snackbar
        open={open}
        onClose={handleCloseSnack}
        TransitionComponent={Transition}
      >
        <Alert
          severity="success"
          sx={{ width: "100%" }}
          onClose={handleCloseSnack}
        >
          Registration Successful
        </Alert>
      </Snackbar>
    </div>
  );
};
export default Registersnack;
