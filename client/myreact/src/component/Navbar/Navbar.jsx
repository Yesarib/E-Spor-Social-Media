import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  useTheme,
  IconButton,
  FormControl,
  Select,
  InputBase,
  MenuItem,
  Typography,
} from "@mui/material";
import { DarkMode, LightMode, Menu } from "@mui/icons-material";
import { setMode, setLogout } from "../../states";

const Header = () => {
  // const [isMobil,setIsMobil] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;

  const nick = user?.nick;

  console.log(user);

  return (
    <Navbar bg={neutralLight} expand="lg">
      <Container>
        <Navbar.Brand href="/">E-Spor</Navbar.Brand>
        <Form style={{ marginLeft: "35px", width: "25em" }} className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-3"
            aria-label="Search"
          />
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            style={{ padding: "2px", justifyContent: "space-between" }}
            className="justify-content-end flex-grow-1 pe-3"
          >
            <Nav.Link style={{ fontSize: "14px" }} href="/">
              Home
            </Nav.Link>
            <Nav.Link style={{ fontSize: "14px" }} href="#link">
              Looking For Player
            </Nav.Link>
            <Nav.Link style={{ fontSize: "14px" }} href="#link">
              Tournaments
            </Nav.Link>
            <IconButton onClick={() => dispatch(setMode())}>
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>
            <FormControl variant="standard" value={nick}>
              <Select
                value={nick}
                sx={{
                  backgroundColor: neutralLight,
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={nick}>
                  <Typography> {nick} </Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>
                  Log Out
                </MenuItem>
              </Select>
            </FormControl>
            {/* <Nav.Link style={{fontSize:'14px'}} href="/login">Login</Nav.Link> */}

            {/* <NavDropdown title="Espada 6" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Profil</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Ayarlar Ve Gizlilik
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Yardım</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Çıkış
                  </NavDropdown.Item>
                </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
