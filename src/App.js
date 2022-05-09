import {
  AppBar,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
  Box,
  Paper,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  BottomNavigation,
  BottomNavigationAction,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  TextField,  
} from "@mui/material";
import React from 'react';

import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import MenuIcon from "@mui/icons-material/Menu";
import LayerIcon from "@mui/icons-material/Layers";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { makeStyles } from "@material-ui/core/styles";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    background: "rgba(0,0,0,.3)",
  },

  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(9),
    marginTop: theme.spacing(8),
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  cardGrid: {
    marginTop: theme.spacing(4),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              SpaceX
            </Typography>
            <Box mr={3}>
              <Button color="inherit" variant="outlined" onClick={handleClickOpen}>
                Log in
              </Button>
              <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Log in</DialogTitle>
              <DialogContent>
                <DialogContentText>Log in to see videos</DialogContentText>
                <TextField 
                  autoFocus
                  maegin="dance"
                  id="name"
                  label="Email Adress"
                  type="email"
                  fullWidth
                />
                    <TextField 
                  autoFocus
                  maegin="dance"
                  id="password"
                  label="Password"
                  type="password"
                  fullWidth
                />
              </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">Log in</Button>
      <Button onClick={handleClose} color="primary">Cancel</Button>
    </DialogActions>
              </Dialog>
            </Box>
            <Button color="secondary" variant="contained">
              Sign Up
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      <main>
        <Paper
          className={classes.mainFeaturesPost}
          style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}
        >
          <Container fixed>
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturesPostContent}>
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                    SpaceX
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  </Typography>
                  <Button variant="contained" color="secondary">
                    Lern more
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <div className={classes.mainContent}>
          <Container maxWidth="md">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gatterBottom
            >
              SpaceX main
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation
            </Typography>
            <div className={classes.mainButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Get Start
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Lern more
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      Blog post
                    </Typography>
                    <Typography>
                      Blog Blog post Blog post Blog post Blog post Blog post
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                    <LayerIcon />
                    <PlayCircleFilledIcon />
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer>
        <Typography variant="h6" align="center" gutterBottom> Footer </Typography>
        <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}
        > 
  <BottomNavigationAction 
    label="Recents"
    value="recents"
    icon={<RestoreIcon />}
  />
    <BottomNavigationAction 
    label="Favorites"
    value="favorites"
    icon={<FavoriteIcon />}
  />
     <BottomNavigationAction 
    label="Nearby"
    value="nearby"
    icon={<LocationOnIcon />}
  />
    <BottomNavigationAction 
    label="Folder"
    value="folder"
    icon={<FolderIcon />}
  />
         </BottomNavigation>
         <Typography align="center" color="textSecondary" component="p" variant="subtitle1">
           Site on React JS Material UI
         </Typography>
      </footer>
    </>
  );
}

export default App;
