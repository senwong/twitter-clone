const Auth = () => {
  let isAuthoried = true;
  function login(cb) {
    isAuthoried = true;
    if (cb && typeof cb === 'function') {
      cb();
    }
  }
  function logout(cb) {
    isAuthoried = false;
    if (cb && typeof cb === 'function') {
      cb();
    }
  }
  function isAuth() {
    return isAuthoried;
  }
  return {
    login, logout, isAuth,
  };
};
export default Auth();
