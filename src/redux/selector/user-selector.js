const getUserName = (state) => state.auth.user.name;
const getToken = (state) => state.auth.token;
const getIsLogin = (state) => state.auth.isLogin;
const getIsLoading = (state) => state.auth.isLoading;
const getIsFetchingUser = (state) => state.auth.isFetchingUser;
const getError = (state) => state.auth.error;

const getBook = (state) => state.books.books;

export const userSelector = {
  getUserName,
  getToken,
  getIsLogin,
  getBook,
  getIsLoading,
  getIsFetchingUser,
  getError,
};
