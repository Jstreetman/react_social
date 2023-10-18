import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
const ErrorSnack = ({ openErr, errSnack, Transition }) => {
  return (
    <div>
      <Snackbar
        open={openErr}
        onClose={errSnack}
        TransitionComponent={Transition}
      >
        <Alert severity="error" onClose={errSnack} sx={{ width: "100%" }}>
          Error
        </Alert>
      </Snackbar>
    </div>
  );
};
export default ErrorSnack;
