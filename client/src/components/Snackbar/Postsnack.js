import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Postsnack = ({ openP, handleCloseSnack, Transition }) => {
  return (
    <div>
      <Snackbar
        open={openP}
        onClose={handleCloseSnack}
        TransitionComponent={Transition}
      >
        <Alert
          severity="success"
          onClose={handleCloseSnack}
          sx={{ width: "100%" }}
        >
          Post Successful
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Postsnack;
