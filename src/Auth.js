import React, { useEffect, useState } from 'react';
import { auth } from './firebase';

// Create a new context
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
	// create the currentUser hook and set its defualt value to null
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true)

	// when the auth state changes, set the current user to the value returned by firebase
	useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);
  
  if (pending) {
    return <>Loading...</>
  }

	return (
		// pass the currentUser value to the auth provider. will rerender every time the value changes.
		<AuthContext.Provider value={{ currentUser }}>
			{/* display whatever is placed between AuthProvider tags when invoked */}
			{/* this decouples <AuthProvider> from its content and makes it more reusable */}
			{children}
		</AuthContext.Provider>
	);
};
