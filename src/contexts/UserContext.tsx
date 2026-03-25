import React, { createContext, useContext, useState, ReactNode } from 'react';

/**
 * User levels for access control or display.
 * Could be numeric or descriptive strings.
 */
export type UserLevel = 'סמל' | 'רב"ט' | 'טוראי';

export interface LoggedUser {
  fullName: string;
  personalNumber: string;
  teamId: string;
  level: UserLevel;
  job: string;
}

interface UserContextType {
  user: LoggedUser | null;
  login: (userData: LoggedUser) => void;
  logout: () => void;
  updateUser: (updates: Partial<LoggedUser>) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

/**
 * Mock data for the initial logged-in user.
 * In a real app, this would be fetched from an API or local storage.
 */
const mockUser: LoggedUser = {
  fullName: 'עידו ישראלי',
  personalNumber: '8241053',
  teamId: 'leaf2',
  level: 'סמל',
  job: "מפתח Fullstack"
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<LoggedUser | null>(mockUser);

  const login = (userData: LoggedUser) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const updateUser = (updates: Partial<LoggedUser>) => {
    setUser((prev) => (prev ? { ...prev, ...updates } : null));
  };

  return (
    <UserContext.Provider value={{ user, login, logout, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
