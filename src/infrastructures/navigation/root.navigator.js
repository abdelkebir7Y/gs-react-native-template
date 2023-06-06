import React, { useContext, useEffect } from "react";

import { AUTH_STATUS } from "../../_constant";
import { Login } from "../../features/account/screens/login.screen-sms";
import { AuthContext } from "../../services/authentication/authentication.context";

import { DrawerNavigator } from "./drawer.navigator";

export const RootNavigator = () => {
  const { authStatus, restoreToken } = useContext(AuthContext);

  useEffect(() => {
    restoreToken();
  }, [restoreToken]);

  switch (authStatus) {
    case AUTH_STATUS.IDLE:
      return null;
    case AUTH_STATUS.SIGNED_OUT:
      return <Login />;
    default:
      return <DrawerNavigator />;
  }
};
