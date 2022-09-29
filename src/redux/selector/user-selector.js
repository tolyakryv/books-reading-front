const getUserName = (state) => state.auth.user.name;
const getIsLogin = (state) => state.auth.isLogin;
const getIsLoading = (state) => state.auth.isLoading;
const getError = (state) => state.auth.error;

const getBook = (state) => state.book;

export const userSelector = {
  getUserName,
  getIsLogin,
  getBook,
  getIsLoading,
  getError,
};
