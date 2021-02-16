import React, { useEffect, useState, useCallback } from "react";
import Keycloak from "keycloak-js";
import SecuredContent from './SecuredContent';

const Secured = () => {
  const [isAutenticated, setIsAutenticated] = useState(false);
  const [keycloak, setKeycloak] = useState();

  const loadConfig = useCallback(() => {
    const keycloak = Keycloak("/keycloak.json");
    keycloak.init({ onLoad: "login-required" }).then((authenticated) => {
      setKeycloak(keycloak);
      setIsAutenticated(authenticated);
    });
  }, [Keycloak]);

  useEffect(() => {
    loadConfig();
  }, [loadConfig]);

  if (keycloak) {
    if (isAutenticated)
      return <div className="secured container"><p><SecuredContent/></p></div>;
    else return <div className="public container"><p>Unable to authenticate</p></div>;
  } else {
    return <div className="loader"></div>;
  }
};

export default Secured;