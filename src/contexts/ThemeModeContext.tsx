import React, { createContext, useContext, useState, useMemo, ReactNode } from 'react';
import { PaletteMode } from '@mui/material';

interface ThemeModeContextType {
    mode: PaletteMode;
    toggleTheme: () => void;
}

const ThemeModeContext = createContext<ThemeModeContextType | undefined>(undefined);

export const ThemeModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Check local storage or system preference
    const [mode, setMode] = useState<PaletteMode>(
        (localStorage.getItem('themeMode') as PaletteMode) || 'light'
    );

    const toggleTheme = () => {
        setMode((prevMode) => {
            const newMode = prevMode === 'light' ? 'dark' : 'light';
            localStorage.setItem('themeMode', newMode);
            return newMode;
        });
    };

    const value = useMemo(() => ({ mode, toggleTheme }), [mode]);

    return (
        <ThemeModeContext.Provider value={value}>
            {children}
        </ThemeModeContext.Provider>
    );
};

export const useThemeMode = () => {
    const context = useContext(ThemeModeContext);
    if (context === undefined) {
        throw new Error('useThemeMode must be used within a ThemeModeProvider');
    }
    return context;
};
