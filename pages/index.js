import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "next/link";
import { theme } from "@/utils/MUIConfig/theme@";
import { Box, Card, CardActionArea, Divider, Grid } from "@mui/material";

const references = [
  {
    id: 1,
    name: "MUI Documentation",
    link: "https://mui.com/material-ui/getting-started/overview/",
    description:
      "Here you can find information to get started with MUI, Material UI is a library of React UI components that implements Google's Material Design.",
  },
  {
    id: 2,
    name: "NextJS Documentation",
    link: "https://nextjs.org/docs",
    description:
      "Here you can find information about NextJS, see its documentation and new features.",
  },
  {
    id: 3,
    name: "Kevin Tomas setup MUI and NextJS",
    link: "https://blog.logrocket.com/getting-started-with-mui-and-next-js/",
    description:
      "Kevin has a blog on how to integrate MUI & NextJS without conflicts, I strongly recommend to read and contrast the information provided by Kevin and this boilerplate",
  },
];

export default function Home() {
  return (
    <Container sx={{ mt: 3 }} align="center" maxWidth="lg">
      <Typography variant="h4" color="textPrimary" fontWeight={700}>
        NextJS - MUI | Boilerplate
      </Typography>
      <Box sx={{ mt: 3 }} component={"main"}>
        <Typography variant="h6" color="textPrimary">
          This boilerplate was created following the guidance of{" "}
          <Link
            style={{
              textDecoration: "none",
              color: theme.palette.text.secondary,
            }}
            href={
              "https://blog.logrocket.com/getting-started-with-mui-and-next-js/"
            }
            target="_blank"
          >
            Kevin Tomas
          </Link>{" "}
          and the knowledge acquired with the MUI documentation, I attach some
          reference links if you want to acquire this same info
        </Typography>
      </Box>

      <Grid alignItems={"stretch"} sx={{ mt: 4 }} container spacing={2}>
        {references.map((ref) => (
          <Grid key={ref.id} item xs={12} md={4}>
            <Card sx={{ height: "100%" }} variant="outlined">
              <CardActionArea
                sx={{ py: 4, px: 2 }}
                href={ref.link}
                target="_blank"
              >
                <Typography variant="h6" color="textPrimary" fontWeight={700}>
                  {ref.name}
                </Typography>
                <Typography variant="body1" color="textPrimary">
                  {ref.description}
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
        <Grid sx={{ mt: 5 }} item xs={12}>
          <Divider>
            <Typography variant="body1" color="textSecondary">
              boiler plate made by{" "}
              <Link
                style={{
                  textDecoration: "none",
                  color: theme.palette.text.secondary,
                  fontWeight: 700,
                }}
                href="https://github.com/juan-alvarz"
                target="_blank"
              >
                Juan E. Alvarez
              </Link>{" "}
              | 2023
            </Typography>
          </Divider>
        </Grid>
      </Grid>
    </Container>
  );
}
