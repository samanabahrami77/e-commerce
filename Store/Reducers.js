export default (
  state = {
    user: {},
    massege: { status: "", massege: "" },
    product: {},
    loading: false,
    cart: [],
  },
  action
) => {
  switch (action.type) {
    case "USER_DETAIL":
      return { ...state, user: action.payload };
    case "NOTIFY":
      return {
        ...state,
        massege: {
          status: action.payload.status,
          massege: action.payload.massege,
        },
      };
    case "PRODUCT":
      return { ...state, product: action.payload };
    case "LOADING":
      return { ...state, loading: !action.payload };
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "INCREASE_NUMBER_OF_PRODUCT":
      return {
        ...state,
        cart: action.payload.product.map((item) =>
          item.id === action.payload.id
            ? { ...item, Quanity: item.Quanity + 1 }
            : { ...item, Quanity: item.Quanity }
        ),
      };
    case "DECREASE_NUMBER_OF_PRODUCT":
      return {
        ...state,
        cart: action.payload.product.map((item) =>
          item.id === action.payload.id
            ? { ...item, Quanity: item.Quanity - 1 }
            : { ...item, Quanity: item.Quanity }
        ),
      };
    default:
      return state;
  }
};
