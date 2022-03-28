export default (state = {}, action) => {
  switch (action.type) {
    case "USER_DETAIL":
      return { ...action.payload };
    default:
      return state;
  }
};
