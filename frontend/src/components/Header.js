import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { createTheme, Link, ThemeProvider } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

const Header = ({ toggleDarkMode, isLoggedIn }) => {
  const [loggedIn, setLoggedIn] = useState(isLoggedIn);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const customTheme = createTheme({
    typography: {
      fontFamily: "'Freeman', sans-serif", // Use Freeman font family
    },
    palette: {
      primary: {
        main: "#ed6c21", // Custom color for material ui button
      },
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            className="text-white text-bold pt-3 pb-3 pl-5"
            variant="h3"
            component="div"
            style={{
              flexGrow: 1,
              fontFamily: "'Freeman', sans-serif",
            }}
          >
            Potato
          </Typography>

          <div className="flex items-center gap-4">
            <button className="bg-orange-600 hover:bg-orange-400 text-white rounded-md p-3 focus:outline-none">
              <SearchIcon />
            </button>

            <button
              className="bg-orange-600 hover:text-black hover:bg-white text-white rounded-md p-3 focus:outline-none"
              onClick={toggleDarkMode}
            >
              <Brightness4Icon />
            </button>

            {!loggedIn ? (
              <>
                <button
                  className="text-white px-4 py-2 text-2xl bg-orange-600 hover:text-black hover:bg-white rounded-md p-3 focus:outline-none"
                  onClick={handleLogin}
                  style={{
                    flexGrow: 1,
                    fontFamily: "'Freeman', sans-serif",
                    letterSpacing: "1px",
                  }}
                >
                  Login
                </button>
                <button
                  style={{
                    flexGrow: 1,
                    fontFamily: "'Freeman', sans-serif",
                    letterSpacing: "1px",
                  }}
                  className="text-white px-4 py-2 text-2xl bg-orange-600 hover:bg-white hover:text-black rounded-md p-3 focus:outline-none"
                >
                  Signup
                </button>
              </>
            ) : (
              <>
                <AccountCircleIcon className="" />

                <Link href="/cart" className="text-white">
                  {/* <ShoppingCartIcon className="" /> */}
                  <button
                    className="text-white px-4 py-2 text-2xl bg-orange-600 hover:bg-white hover:text-black rounded-md p-3 focus:outline-none"
                    style={{ flexGrow: 1, fontFamily: "'Freeman', sans-serif" }}
                  >
                    Cart
                  </button>
                </Link>
                <button
                  className="text-white px-4 py-2 text-2xl bg-orange-600 hover:bg-white hover:text-black rounded-md p-3 focus:outline-none"
                  onClick={handleLogout}
                  style={{ flexGrow: 1, fontFamily: "'Freeman', sans-serif" }}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
