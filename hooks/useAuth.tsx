import React, { createContext, useContext } from "react";

export const AuthContext = createContext({
  user: "",
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const value = {
    user: "value",
  };
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
