import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/Profile/Profile';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { CssBaseline,ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';

function App() {

  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const isAuth = Boolean(useSelector((state) => state.token))
  return (
    <div>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <Routes>
            <Route path='/' element={isAuth ? <Home /> : <Navigate to='/login'/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile/:userId' element={<Profile />} />
          </Routes>
        </ThemeProvider>
        
      </Router>
    </div>
  );
}

export default App;
