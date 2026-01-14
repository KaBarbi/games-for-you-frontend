import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface AuthContextType {
  user: any;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  const fetchUser = async () => {
    const response = await api.get("user/");
    setUser(response.data);
  };

  const login = async (username: string, password: string) => {
    // 1️⃣ login
    const response = await api.post("login/", {
      username: username.trim(),
      password,
    });

    const { access, refresh } = response.data;

    // 2️⃣ tokens
    localStorage.setItem("access", access);
    localStorage.setItem("refresh", refresh);

    api.defaults.headers.common["Authorization"] = `Bearer ${access}`;

    // 3️⃣ fetch user 
    try {
      await fetchUser();
    } catch {
      console.warn("User fetched failed, but login succeeded");
    }
  };

  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setUser(null);
    delete api.defaults.headers.common["Authorization"];
  };

  useEffect(() => {
    const token = localStorage.getItem("access");
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      fetchUser().catch(() => logout());
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
