import HighlightIcon from '@mui/icons-material/Highlight';
import { useLocation, useNavigate } from "react-router-dom";
import logout from "../api/auth/logout"
import { Button, Box } from "@mui/material";
function Header(){
    const location = useLocation();
    const navigate = useNavigate()

    const showLogout = location.pathname === "/keeper";
    const showLogin = location.pathname === "/register";
    const showRegister = location.pathname === "/login";

    
    async function userLogout(){
        const result = await logout();
        if(result === 1){
            navigate("/login");
        }
    }

    return <header>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        px: 2,
      }}
    >
      <Box
        component="h1"
        sx={{
            cursor: "pointer",
            "&:hover": {
            opacity: 0.8,
            },
        }}
        onClick={() => navigate("/")}
        >
        <HighlightIcon /> Keeper
      </Box>
      
  
      {showLogout && (
        <Button
          variant="contained"
          sx={{
            ml: "auto",
            backgroundColor: "#e0a800",
            color: "#fff",
            "&:hover": { backgroundColor: "#f5ba13" },
          }}
          onClick={userLogout}
        >
          Logout
        </Button>
      )}
      {showLogin && (
        <Button
          variant="contained"
          sx={{
            ml: "auto",
            backgroundColor: "#e0a800",
            color: "#fff",
            "&:hover": { backgroundColor: "#f5ba13" },
          }}
          onClick={() =>(navigate("/login"))}
        >
          Login
        </Button>
      )}
      {showRegister && (
        <Button
          variant="contained"
          sx={{
            ml: "auto",
            backgroundColor: "#e0a800",
            color: "#fff",
            "&:hover": { backgroundColor: "#f5ba13" },
          }}
          onClick={() =>(navigate("/register"))}
        >
          Register
        </Button>
      )}
    </Box>
  </header>
}

export default Header;