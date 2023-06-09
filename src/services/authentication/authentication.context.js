import React, { createContext, useCallback, useState } from "react";

import { AUTH_STATUS } from "../../_constant";
import { clearToken, getToken, storeToken } from "../../utils/storage.util";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [state, setState] = useState({
    authToken: null,
    authStatus: AUTH_STATUS.IDLE,
  });

  const onLogin = useCallback((token) => {
    storeToken(token).then(() =>
      setState({ authToken: token, authStatus: AUTH_STATUS.SIGNED_IN })
    );
  }, []);

  const onLogout = useCallback(() => {
    clearToken();
    setState({ authToken: "", authStatus: AUTH_STATUS.SIGNED_OUT });
  }, []);

  const onRestoreToken = useCallback(async () => {
    getToken().then((token) => {
      if (token?.length) {
        setState({ authToken: token, authStatus: AUTH_STATUS.SIGNED_IN });
      } else {
        setState({ authToken: "", authStatus: AUTH_STATUS.SIGNED_OUT });
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login: onLogin,
        logout: onLogout,
        restoreToken: onRestoreToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
