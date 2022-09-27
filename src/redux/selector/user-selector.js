const getUserName = (state) => state.auth.user.name;
const getIsLogin = (state) => state.auth.isLogin;
const getBook = (state) => state.auth.book;
export const userSelector = { getUserName, getIsLogin, getBook };
