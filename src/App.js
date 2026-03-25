import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './Components/SideBars/Sidebar.tsx';
import Home from './Components/pages/Home/index.tsx';
import styles from './App.module.css';
import Search from './Components/pages/Search/index.tsx';
import Navbar from './Components/shared/Navbar/index.tsx';
import Profile from './Components/pages/Profile/index.tsx';
import CommanderSidebar from './Components/SideBars/CommanderSidebar.tsx';
import ControlPannel from './Components/pages/Com/ControlPannel/index.tsx';
import Personnel from './Components/pages/Com/Personnel/index.tsx';
import Events from './Components/pages/Com/Events/index.tsx';
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
                <CommanderSidebar />
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