import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, Link } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
// import TextField from "@mui/material/TextField";
import Register from "../../features/Auth/components/Register";
import Login from "../../features/Auth/components/Login";
import { Close } from "@mui/icons-material";

const MODE = {
  LOGIN: "login",
  REGISTER: "register",
};

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const [mode, setMode] = React.useState(MODE.LOGIN);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                BookShop
              </Link>
            </Typography>

            <NavLink to="/todo">
              <Button
                color="inherit"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Todo
              </Button>
            </NavLink>
            <NavLink to="/albums">
              <Button
                color="inherit"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Albums
              </Button>
            </NavLink>
            <Button color="inherit" onClick={handleClickOpen}>
              Register
            </Button>
          </Toolbar>
        </AppBar>
        <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
          <DialogTitle>Register</DialogTitle>
          <IconButton
            sx={(theme) => ({
              position: "absolute",
              top: theme.spacing(1),
              right: theme.spacing(1),
              color: theme.palette.grey[500],
            })}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
          <DialogContent>
            {mode === MODE.REGISTER && (
              <>
                <Register closeDialog={handleClose} />
                <Box textAlign="center">
                  <button color="primary" onClick={() => setMode(MODE.LOGIN)}>
                    Already have an account. Login here
                  </button>
                </Box>
              </>
            )}
            {/* Directly render the Register component */}
            {mode === MODE.LOGIN && (
              <>
                <Login closeDialog={handleClose} />
                <Box textAlign="center">
                  <button
                    color="primary"
                    onClick={() => setMode(MODE.REGISTER)}
                  >
                    Don't have an account.
                  </button>
                </Box>
              </>
            )}
          </DialogContent>

          {/* <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions> */}
        </Dialog>
      </Box>
    </div>
  );
}
