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
import { ThemeModeProvider, useThemeMode } from './contexts/ThemeModeContext.tsx';
import getTheme from './theme.ts';
import { UserProvider } from './contexts/UserContext.tsx';
import NotFound from './Components/pages/NotFound/index.tsx';

const AppContent = () => {
  const { mode } = useThemeMode();
  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserProvider>
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
                <Route path="/profile/:name" element={<Profile />} />
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
                <Route path="/Dashboard/:id" element={<ControlPannel />} />
                <Route path="/Dashboard/:id/personnel" element={<Personnel />} />
                <Route path="/Dashboard/:id/events" element={<Events />} />
              </Route>

              {/* Catch-all Route for non-existent pages */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <ThemeModeProvider>
      <AppContent />
    </ThemeModeProvider>
  );
};

export default App;