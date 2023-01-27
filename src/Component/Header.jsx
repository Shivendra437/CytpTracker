import React from "react";
import {
  createTheme,
  AppBar,
  Container,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  ThemeProvider
} from "@material-ui/core";
import "../Style/header.css";
import { Link } from "react-router-dom";
export default function Header() {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff"
      },
      type: "dark"
    }
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography className="Title">
              <Link to="/">Crypto Tracker</Link>
            </Typography>
            <Select
              variant="outlined"
              style={{ width: 100, height: 40, marginLeft: 15 }}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem Value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
