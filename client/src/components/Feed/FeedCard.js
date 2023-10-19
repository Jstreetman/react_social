import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import { Container, IconButton, Stack } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const FeedCard = (post) => {
  return (
    <div>
      <Container maxWidth="md" sx={{ marginTop: "20px" }}>
        <Card>
          <CardActionArea>
            <CardHeader
              title="Posts"
              className="text-light text-center"
              sx={{ backgroundColor: "#1976d2" }}
            ></CardHeader>
          </CardActionArea>
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography>{post.pDate}</Typography>

            <IconButton>
              <MoreHorizIcon />
            </IconButton>
          </Container>
          <Container>
            <Stack direction="column">
              <Typography fontSize="15px">{post.username}</Typography>

              <Typography variant="h5" component="div">
                {post.pText}
              </Typography>
            </Stack>
          </Container>
        </Card>
      </Container>
    </div>
  );
};
export default FeedCard;
