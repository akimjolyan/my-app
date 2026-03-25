import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './Components/SideBar/SideBarr.tsx';
import Home from './Components/pages/Home/Home.tsx';
import styles from './App.module.css';
import Search from './Components/pages/Search/Search.tsx';
import Navbar from './Components/shared/Navbar/Navbar.tsx';
import Profile from './Components/pages/Profile/Profile.tsx';
import ComSidebar from './Components/SideBar/ComSidebar/ComSidebar.jsx';
import ControlPannel from './Components/pages/Com/ControlPannel/ControlPannel.tsx';
import Personnel from './Components/pages/Com/Personnel/Personnel.tsx';
import Events from './Components/pages/Com/Events/Events.tsx';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from './theme.ts';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box className={styles.appShell} dir="rtl">

          {/* ── Top Navbar ── */}
          <Navbar />

          {/* ── Body: Layout Routing ── */}
          <Routes>
            {/* Routes WITH Sidebar */}
            <Route element={
              <Box className={styles.mainLayoutContainer}>
                <main className={styles.contentArea}>
                  <Outlet />
                </main>
                <Sidebar />
              </Box>
            }>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
            </Route>

            {/* Routes WITHOUT Sidebar */}
            <Route element={
              <Box className={styles.mainLayoutContainer}>
                <main className={styles.contentArea}>
                  <Outlet />
                </main>
              </Box>
            }>
              <Route path="/profile" element={<Profile />} />
            </Route>

            {/* Routes WITH ComSidebar */}
            <Route element={
              <Box className={styles.mainLayoutContainer}>
                <main className={styles.contentArea}>
                  <Outlet />
                </main>
                <ComSidebar />
              </Box>
            }>
              <Route path="/Dashboard" element={<ControlPannel />} />
              <Route path="/Dashboard/personnel" element={<Personnel />} />
              <Route path="/Dashboard/events" element={<Events />} />
            </Route>
          </Routes>

        </Box >
      </Router >
    </ThemeProvider>
  );
};

export default App;