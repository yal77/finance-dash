import { createContext, useContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
	const [token, setToken] = useState("");
	const [user, setUser] = useState(null);
	const { balance, setBalance } = useState(0);
	return (
		<AuthContext.Provider
			value={{ token, setToken, user, setUser, balance, setBalance }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
