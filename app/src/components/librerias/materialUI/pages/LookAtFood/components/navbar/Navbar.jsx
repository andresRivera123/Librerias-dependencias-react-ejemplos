import { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Drawer,
  Link,
  Typography,
} from "@mui/material";
import logo from "../../assets/main/logo.png";
import { navItems } from "../../../../../../../data";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  return (
    <AppBar position="static" elevation={0} color="transparent">
      <Container
        maxWidth="xl"
        sx={{
          px: 10,
          pt: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2",
        }}
        disableGutters
      >
        <img
          src={logo}
          alt="logo page"
          style={{ cursor: "pointer", width: "60px", height: "50px" }}
        />
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: "54px",
          }}
        >
          {navItems.map((item) => (
            <Link
              href="#"
              key={item.id}
              color="#fff"
              sx={{
                fontWeight: "300",
                fontSize: "14px",
                opacity: 0.7,
                "&:hover": { opacity: 1 },
                "&:first-of-type": {
                  opacity: 1,
                },
              }}
            >
              {item.name}
            </Link>
          ))}
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "14px",
                color: "#fff",
                opacity: "0.5",
              }}
            >
              Bienvenido
            </Typography>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "14px",
                color: "#fff",
                opacity: "1",
              }}
            >
              Andy
            </Typography>
          </Box>
          <AccountCircleIcon sx={{ color: "#fff", fontSize: "45px" }} />
        </Box>
        <MenuIcon
          sx={{
            display: { xs: "block", md: "none" },
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={() => setOpenMobileMenu(true)}
        />
        <Drawer
          anchor="left"
          open={openMobileMenu}
          onClose={() => setOpenMobileMenu(false)}
        >
          <Box
            sx={{
              position: "relative",
              width: 250,
              height: "100%",
              background: "#fff",
              py: 3,
              px: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 5,
            }}
            role="presentation"
            onClick={() => setOpenMobileMenu(false)}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: "14px",
                    color: "#333",
                    opacity: "0.5",
                  }}
                >
                  Bienvenido
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: "14px",
                    color: "#333",
                    opacity: "1",
                  }}
                >
                  Andy
                </Typography>
              </Box>
              <AccountCircleIcon sx={{ color: "#333", fontSize: "45px" }} />
            </Box>
          </Box>
        </Drawer>
      </Container>
    </AppBar>
  );
};

export default Navbar;
