import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardHeader,
  Container,
  Grid,
} from "@mui/material";

const FeedBox = () => {
  return (
    <div>
      <Container maxWidth="md" sx={{ marginTop: "20px" }}>
        <Card>
          <CardActionArea>
            <CardHeader
              title="Create Post"
              className="text-center text-light"
              sx={{ backgroundColor: "#1976d2" }}
            ></CardHeader>
            <Grid container alignItems="center" className="p-3">
              <Grid item sx={{ width: "5%" }}>
                <Avatar />
              </Grid>
              <Grid item className="p-3" sx={{ width: "95%" }}>
                <Button
                  variant="outlined"
                  sx={{ borderColor: "black", color: "black" }}
                  fullWidth
                >
                  <span>Create a Post</span>
                </Button>
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
      </Container>
    </div>
  );
};

export default FeedBox;
