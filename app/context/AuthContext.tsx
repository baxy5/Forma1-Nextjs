import React, { createContext, useState, useEffect, ReactNode } from "react";
import { setToken, getToken, removeToken } from "../utils/auth";

interface DecodedToken {
  sub: string;
  role: string;
  exp: number;
}

interface AuthContextType {
  user: DecodedToken | null;
  login: (token: string) => void;
  logout: () => void;
  loading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  loading: true,
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<DecodedToken | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = getToken();
    if (token) {
      setUser(token);
    }
    setLoading(false);
  }, []);

  const login = (token: string): void => {
    setToken(token);
    const decoded = getToken();
    setUser(decoded);
  };

  const logout = (): void => {
    removeToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
