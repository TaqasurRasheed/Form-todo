import { createContext, useState } from "react";
export const AuthContext = createContext();
export const Context = (props) => {
  const [user, setUser] = useState([]);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};
