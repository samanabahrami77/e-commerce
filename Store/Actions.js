export const Auth = ({ ...args }) => {
  return { type: "USER_DETAIL", payload: args };
};

export const Notify = (status, massege) => {
  return { type: "NOTIFY", payload: { status, massege } };
};

export const Product = (product) => {
  return { type: "PRODUCT", payload: product };
};

export const AddToCart = (product) => {
  return { type: "ADD_TO_CART", payload: product };
};

export const RemoveCart = (id) => {
  return { type: "REMOVE_CART", payload: id };
};

export const increaseNumOfProduct = (id, product) => {
  return { type: "INCREASE_NUMBER_OF_PRODUCT", payload: { id, product } };
};

export const decreaseNumOfProduct = (id, product) => {
  return { type: "DECREASE_NUMBER_OF_PRODUCT", payload: { id, product } };
};

export const SetTheme = (theme) => {
  return { type: "SET_THEME", payload: theme };
};

export const SetFilter = (product) => {
  return { type: "SET_FILTER", payload: product };
};

export const Logout = () => {
  return { type: "LOG_OUT" };
};

export const ClearSearch = () => {
  return { type: "CLEAR_SEARCH" };
};
