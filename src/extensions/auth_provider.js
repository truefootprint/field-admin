import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from "react-admin";

const authProvider = (type, params) => {
  if (type === AUTH_LOGIN) {
    localStorage.setItem("token", btoa(`${params.username}:${params.password}`));
    return Promise.resolve();
  }

  if (type === AUTH_LOGOUT) {
    localStorage.removeItem("token");
    return Promise.resolve();
  }

  if (type === AUTH_ERROR) {
    const { status } = params;
    if (status === 401 || status === 403) {
        localStorage.removeItem("token");
        return Promise.reject();
    }
    return Promise.resolve();
  }

  if (type === AUTH_CHECK) {
    return localStorage.getItem("token")
        ? Promise.resolve()
        : Promise.reject();
  }

  return Promise.reject("Unknown method");
};

export default authProvider;
