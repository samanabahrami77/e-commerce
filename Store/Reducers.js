export default (
  state = {
    user: {},
    massege: { status: "", massege: "" },
    product: {},
    loading: false,
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
    default:
      return state;
  }
};
