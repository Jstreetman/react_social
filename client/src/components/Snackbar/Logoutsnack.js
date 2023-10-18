import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Logoutsnack = ({ openLogout, handleCloseLogout, Transition }) => {
  return (
    <div>
      <Snackbar
        open={openLogout}
        onClose={handleCloseLogout}
        TransitionComponent={Transition}
      >
        <Alert
          severity="success"
          onClose={handleCloseLogout}
          sx={{ width: "100%" }}
        >
          Logging out...
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Logoutsnack;
