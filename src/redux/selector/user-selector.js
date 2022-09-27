const getUserName = (state) => state.user.userName;
const getIsLogin = (state) => state.isLogin;
export const userSelector = { getUserName, getIsLogin };
