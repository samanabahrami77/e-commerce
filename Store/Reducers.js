export default (
  state = { user: {}, massege: { status: "", massege: "" } },
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
    default:
      return state;
  }
};
